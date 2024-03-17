// customer.js
const Sequelize = require ('sequelize');
const db =  require('../util/database.js');

const Customer = db.define('Customer', {
    customer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: Sequelize.STRING(20),
    lastname: Sequelize.STRING(20),
    email: Sequelize.STRING(20),
    password: Sequelize.STRING(20),
    address: Sequelize.STRING(20),
    phone_number: Sequelize.STRING(20)
});

module.exports = Customer;
