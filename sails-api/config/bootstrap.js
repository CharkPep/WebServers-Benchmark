/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

const mongoose = require("mongoose")
require('dotenv').config({
  "path" : 'C:\\Users\\Pep\\WebstormProjects\\httpserversbenchmark\\sails-api\\config\\.env'
})

module.exports.bootstrap = async function() {
  const connect = await mongoose.connect(process.env.CONNECTION_STRING)
  console.log(
    "Database connected: ",
    connect.connection.host,
    connect.connection.name
  );

};
