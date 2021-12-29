import { Router } from "express";
import BlogDB from "../data/blog.DAO.js";

const router = new Router();

/*
>> TODO: Routes to add
- A get() route at '/' to get all movies
*/
router
  .route("/")
  .get(async (req, res) => {
    try {
      let data = await BlogDB.getData();
      data = { data };
      res.send(data);
    } catch (e) {
      res.status(500).send(`Error occurred ${e}`);
    }
  })
  .post(async (req, res) => {
    try {
      let data = await BlogDB.getBlogById(req.body.id);
      data = { data };
      res.send(data);
    } catch (e) {
      res.status(500).send(`Error occurred ${e}`);
    }
  });

router.route("/add-blog").post(async (req, res) => {
  try {
    let data = await BlogDB.addBlog(req.body);
    data = { data };
    res.send(data);
  } catch (e) {
    res.status(500).send(`Error occurred ${e}`);
  }
});

router.route("/user-blog").post(async (req, res) => {
  try {
    let data = await BlogDB.getBlogByUser(req.body.userName);
    res.send(data);
  } catch (e) {
    res.status(500).send(`Error occurred ${e}`);
  }
});

export default router;
