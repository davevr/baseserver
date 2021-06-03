
const couchbase = require('couchbase');
const { map } = require('lodash');

const cluster = new couchbase.Cluster('couchbase://localhost', { 
  username: 'dbuser', password: 'dbpassword' 
});

const bucket = cluster.bucket('beer-sample');

const collection = bucket.defaultCollection();


const beerQuery = `
SELECT * FROM \`beer-sample\` AS beer WHERE beer.type='beer' LIMIT 10
  `

module.exports = {
    Query: {
        test: async (_, __, { dataSources }) =>
            //dataSources.getTheLevels;
        {
            return "This is a test";
        },

        beers: async (_, __, ___) =>
        {
            const result = await cluster.query(beerQuery);
            return result.rows.map(curBeer => curBeer.beer);
        },
    },

    
};