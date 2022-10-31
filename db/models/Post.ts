import Sequelize from 'sequelize';
import conn from '../conn';

const Post = conn.define('post', {
  title: {
    type: Sequelize.STRING,
  },
  body: {
    type: Sequelize.TEXT,
  },
});

export default Post;
