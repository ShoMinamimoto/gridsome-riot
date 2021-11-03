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
    api.loadSource(({addCollection}) => {
        // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
        loadXIVData('SubmarineExploration.en.csv', 'SubDestinations', addCollection);
        loadXIVData('SubmarineMap.en.csv', 'SubMaps', addCollection);
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

    api.loadSource(async actions => {
        const fcInfo = await get('https://xivapi.com/freecompany/9233927348481553472?extended=1&data=FCM')

        const collection = actions.addCollection({
            typeName: 'FreeCompany'
        })
        collection.addNode(fcInfo.data.FreeCompany)

        const collection2 = actions.addCollection({
            typeName: 'CompanyMembers'
        })
        for (member of fcInfo.data.FreeCompanyMembers) {
            collection2.addNode(member)
        }
    })

    api.loadSource(async actions => {
        const linkshells = []
        linkshells.push(await get('https://xivapi.com/linkshell/21110623253435815'))
        linkshells.push(await get('https://xivapi.com/linkshell/crossworld/91e7d9196ab597890242f19596374caf03c7431e'))
        linkshells.push(await get('https://xivapi.com/linkshell/crossworld/2c95d6547efe0d19ce593cbe841ca0453dd760fb'))

        const collection = actions.addCollection({
            typeName: 'Linkshells'
        })
        for (linksh of linkshells) {
            collection.addNode({
                name: linksh.data.Linkshell.Profile.Name,
                members: linksh.data.Linkshell.Results
            })
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
