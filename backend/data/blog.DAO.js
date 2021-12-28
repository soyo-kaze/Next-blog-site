let blogDB;
let blogData;
import dot from "dotenv";
dot.config();

export default class BlogDB {
  static async injectDB(client) {
    if (blogDB) {
      return;
    }
    try {
      blogDB = await client.db(process.env.MONGO_BLOG);
      blogData = await blogDB.collection("blogData");
    } catch (e) {
      console.error(`Unable to connect: ${e}`);
    }
  }

  static async getData() {
    let cursor;
    try {
      cursor = await blogData.find({});
    } catch (e) {
      console.error(`internal error: ${e}`);
      return null;
    }
    return cursor.toArray();
  }

  static async getBlogById(id) {
    let cursor;
    try {
      cursor = await blogData.find({ id: id });
    } catch (e) {
      console.error(`internal error: ${e}`);
      return null;
    }
    return cursor.toArray();
  }

  //TODO: Implement add blogs to the DB. addBlog(data: JSON)
}
