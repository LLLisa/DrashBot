import Sequelize from 'sequelize';
import conn from '../conn';

const Post = conn.define('post', {
  title: {
    type: Sequelize.STRING,
  },
});

export default Post;
