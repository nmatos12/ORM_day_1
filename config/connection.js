const { Sequelize } = require('sequelize');
console.log(process.env.USERNAME, process.env.PASSWORD, process.env.DATABASE);

const connection = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;