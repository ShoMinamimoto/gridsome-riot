// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const iconLocation = './src/assets/icons/'
const dataLocation = './src/data/'

const fs = require('fs');
const yaml = require('js-yaml');
const {get} = require("axios");
const parse = require("csv-parse/lib/sync");

module.exports = function (api) {
    api.loadSource(async ({addCollection}) => {
        loadXIVData('AirshipExplorationPart.csv', 'AirshipParts', addCollection);
        loadXIVData('AirshipExplorationPoint.en.csv', 'AirshipDestinations', addCollection);
        loadXIVData('CharaMakeName.en.csv', 'CharacterNames', addCollection);
        loadXIVData('Item.en.csv', 'Items', addCollection);
        loadXIVData('SubmarineExploration.en.csv', 'SubDestinations', addCollection);
        loadXIVData('SubmarineMap.en.csv', 'SubMaps', addCollection);
        loadXIVData('SubmarinePart.csv', 'SubParts', addCollection);
        loadXIVData('SubmarineRank.csv', 'SubRank', addCollection);
        await loadLodestone('fc', '9233927348481553472', 'FreeCompany', addCollection);
        await loadLodestone('fcmembers', '9233927348481553472', 'CompanyMembers', addCollection);
        await loadLodestone('ls', '21110623253435815', 'Linkshell1', addCollection);
        await loadLodestone('cwls', '91e7d9196ab597890242f19596374caf03c7431e', 'Linkshell2', addCollection);
        await loadLodestone('cwls', '2c95d6547efe0d19ce593cbe841ca0453dd760fb', 'Linkshell3', addCollection);
    })

    api.loadSource(async actions => {
        const fileContents = fs.readFileSync(dataLocation + 'links.yaml', 'utf8');
        const links = yaml.load(fileContents);

        const collection = actions.addCollection({
            typeName: 'Links'
        })

        for (const link of links) {
            for (const subcat of link.subcats) {
                subcat.image = require.resolve(iconLocation + String(subcat.image).padStart(6, '0') + '_hr1.png')
            }
            collection.addNode(link);
        }
    })

    /*api.createPages(({createPage}) => {
        // Use the Pages API here: https://gridsome.org/docs/pages-api/
    })*/
}

function loadXIVData(file, collectionType, addCollection) {
    const data = fs.readFileSync(dataLocation + file, 'utf8');
    const nodes = parse(data, {
        columns: true,
        skip_empty_lines: true,
        from_line: 2,
        cast: true
    })
    const collection = addCollection({
        typeName: collectionType,
    })
    for (const node of nodes) {
        collection.addNode(node)
    }
}

async function loadLodestone(infoType, id, collectionType, addCollection, page = null) {
    let url = "http://lodestone.rriot/lodestone.php?type=" + infoType + "&id=" + id;
    if (page) {
        url = url + "&page=" + page;
    }
    const results = await get(url);
    const collection = addCollection({
        typeName: collectionType,
    })
    if (results.data?.Pagination) {
        for (const result of results.data.Results) {
            collection.addNode(result)
        }
        if (results.data.Pagination.PageNext) {
            await loadLodestone(infoType, id, collectionType, addCollection, results.data.Pagination.PageNext)
        }
    } else {
        collection.addNode(results.data)
    }
}