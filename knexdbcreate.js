// Update with your config settings.
const knexfile = require('./knexfile')
console.log(process.env.ENVIRONMENT)
const dbname = knexfile[process.env.ENVIRONMENT].connection.database
delete knexfile[process.env.ENVIRONMENT].connection.database
let knex = require('knex')(knexfile[process.env.ENVIRONMENT])

// knex.raw('DROP DATABASE IF EXISTS ' + dbname)
//   .then(function () {
// console.log('DATABASE ' + dbname + ' DELETED')

knex.raw('CREATE DATABASE IF NOT EXISTS ' + dbname)
  .then(function () {
    console.log('DATABASE ' + dbname + ' CREATED')
    knexfile[process.env.ENVIRONMENT].connection.database = dbname
    let knex = require('knex')(knexfile[process.env.ENVIRONMENT])
    knex.migrate.latest()
      .then(function () {
        knex.seed.run()
          .then(function () {
            console.log('knex.seeds ran')
          })
      })
  })
  .catch(function (err) {
    console.log(err)
  })
  .finally(function () {
    // To close the connection pool
    knex.destroy()
  })