const Banner = require("../models/banner");
module.exports = {


  friendlyName: 'Banner',


  description: 'Banner something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    let randomPercentage = Math.random()
    return await Banner
        .find({ percentage : { $gte : randomPercentage }}).limit(1)

  }


};
