import conn from './conn';
import { Post } from './models';

export const syncDb = async () => {
  try {
    await conn.sync({ force: true });
    await Post.create({
      title: "test post, please don't upvote",
    });
  } catch (error) {
    console.log(error);
  }
};

syncDb();

export default conn;
