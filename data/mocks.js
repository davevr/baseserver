const casual = require('casual');

const mocks = {
  
  Query: {
    TestMock: async (_, __, { dataSources }) =>
        //dataSources.getTheLevels;
    {
        return casual.sentences(1);
    }
  },

  Beer: {
    rating: async (_, __, ___) =>
    {
        return Math.trunc(Math.random() * 5) + 1;
    },

},
    


};

module.exports = mocks;