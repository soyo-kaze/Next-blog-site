import { Router } from "express";
import BlogDB from "../data/blog.DAO.js";

const router = new Router();

/*
>> TODO: Routes to add
- A get() route at '/' to get all movies
*/
router.get("/", async (req, res) => {
  try {
    let data = await BlogDB.getData();
    data = { data };
    res.send(data);
  } catch (e) {
    res.status(500).send(`Error occurred ${e}`);
  }
});

export default router;
