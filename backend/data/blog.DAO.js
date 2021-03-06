let blogDB;
let blogData;
import dot from "dotenv";
dot.config();

import { ObjectId } from "mongodb";

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
      console.log(id);
      cursor = await blogData.find({ _id: ObjectId(id) });
    } catch (e) {
      console.error(`internal error: ${e}`);
      return null;
    }
    return cursor.toArray();
  }

  //TODO: Implement add blogs to the DB. addBlog(data: JSON) [✅Done]
  static async addBlog(data) {
    let cursor;
    try {
      cursor = await blogData.insertOne({
        ...data,
      });
      return { success: true, message: "Blog added successfully" };
    } catch (e) {
      return {
        success: false,
        message: "Some Error occured please Try again later!! " + e,
      };
    }
  }

  //TODO: Implement get blogs by username
  static async getBlogByUser(userName) {
    let cursor;
    try {
      cursor = await blogData.find({ userName: userName }).sort({ time: -1 });
      console.log(userName);
    } catch (e) {
      console.error(`internal error: ${e}`);
      return null;
    }
    return cursor.toArray();
  }
  //TODO: Implement delete blog
}
