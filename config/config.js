require('dotenv').config();
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'recipes_db',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: process.env.DB_PASS,
    database: 'recipes_db',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'recipes_db',
    host: 'pqxt96p7ysz6rn1f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
  }
};