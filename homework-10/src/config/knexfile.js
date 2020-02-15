// Update with your config settings.
require('dotenv').config({ path: `.env_${process.env.NODE_ENV}` });
require('dotenv').config({ path: `../../.env_${process.env.NODE_ENV}` });

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DBHOST,
      port: process.env.DBPORT,
      database: process.env.DBNAME,
      user: process.env.DBUSER,
      password: process.env.DBPASSWD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    debug: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: '../migrations',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
