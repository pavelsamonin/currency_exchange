const config = require('./config')
module.exports = {

  production: {
    client: config.knexClient,
    connection: config.knexConnection,
    pool: config.knexPool,
    migrations: config.knexMigrations
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: config.knexPool,
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  development: {
    client: config.knexClient,
    connection: config.knexConnection,
    pool: config.knexPool,
    migrations: config.knexMigrations
  }

}
