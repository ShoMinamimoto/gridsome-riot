// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs');
const yaml = require('js-yaml');
const {get} = require("axios");

const fileContents = fs.readFileSync('./src/data/links.yaml', 'utf8');
const links = yaml.load(fileContents);

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.loadSource(async actions => {
    const collection = actions.addCollection({
      typeName: 'Links'
    })

    for (const link of links) {
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
    for(member of fcInfo.data.FreeCompanyMembers) {
      collection2.addNode(member)
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
