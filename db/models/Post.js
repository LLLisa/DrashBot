const Sequelize = require('sequelize');
const conn = require('../conn');

const Post = conn.define('post', {
  title: {
    type: Sequelize.STRING,
  },
  body: {
    type: Sequelize.TEXT,
  },
});

module.exports = Post;
