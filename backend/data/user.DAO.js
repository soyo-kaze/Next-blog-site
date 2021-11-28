/**
 * TODO: Implement user access commands
 * - get user by userName
 * - authorize user
 */
let blogDB;
let usersData;
import dot from "dotenv";
dot.config();
import bcrypt from "bcrypt";

export default class UsersDB {
  static async injectDB(client) {
    if (blogDB) {
      return;
    }
    try {
      blogDB = await client.db(process.env.MONGO_BLOG);
      usersData = await blogDB.collection("users");
    } catch (e) {
      console.error(`Unable to connect: ${e}`);
    }
  }

  static async compareUserPass(userId) {
    let cursor;
    try {
      cursor = await usersData.find(
        { _id: userId },
        { projection: { password: 1 } }
      );
      //   const password = "";
      return cursor.toArray();
    } catch (e) {
      console.error(`internal error: ${e}`);
      return { isPass: false, message: "internal Error" };
    }
  }

  static async getUserById(userId) {
    let cursor;
    try {
      cursor = await usersData.find(
        { _id: userId },
        { projection: { password: 0 } }
      );
    } catch (e) {
      console.error(`internal error: ${e}`);
      return null;
    }
    return cursor.toArray();
  }

  static async addUser(userInfo) {
    let cursor;
    if (userInfo["_id"]) {
      try {
        let hashedPass = await bcrypt.hash(userInfo.password, 10);
        cursor = await usersData.insertOne({
          ...userInfo,
          password: hashedPass,
        });
        return { success: true };
      } catch (e) {
        if (String(e).startsWith("MongoError: E11000 duplicate key error")) {
          return { error: "A user with the given userName already exists." };
        }
        // console.error(`Error occurred while adding new user, ${e}.`);
        return { success: false, message: "Username already exists" };
      }
    } else {
      return { success: false, message: "Internal Error" };
    }
  }
}
