const Sequelize = require('sequelize');
const conn = new Sequelize('postgres://localhost/drashbot', {
  logging: false,
});

export default conn;
