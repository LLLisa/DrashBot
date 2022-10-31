import conn from './conn';
import { Post } from './models';

export const syncDb = async () => {
  try {
    await conn.sync({ force: true });
    await Post.create({
      title: "test post, please don't upvote",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    });
  } catch (error) {
    console.log(error);
  }
};

export default conn;
