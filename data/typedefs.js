const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        test : String
        TestMock: String
        beers: [Beer]
    }

    type Beer {
        abv: Float!
        brewery_id: String
        description: String
        ibu: Float
        name: String
        style: String
        type: String
        updated: String 
        rating: Int
    }
    
`;

module.exports = typeDefs;
