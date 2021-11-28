/**
 * TODO: Implement user routes
 * - authorize user
 * - get user info
 */
import { Router } from "express";
import UsersDB from "../data/user.DAO.js";

import bcrypt from "bcrypt";

const router = new Router();

/*
 >> TODO: Routes to add
 - A get() route at '/' to get all movies
 */
router.route("/user-data").post(async (req, res) => {
  try {
    let data = await UsersDB.getUserById(req.body.userId);
    data = { data };
    res.send(data);
  } catch (e) {
    res.status(500).send(`Error occurred ${e}`);
  }
});
router.route("/login").post(async (req, res) => {
  try {
    let data = await UsersDB.compareUserPass(
      req.body.password,
      req.body.userId
    );
    // console.log(data);
    data = { data };
    let password = data.data[0].password ? data.data[0].password : false;
    if (!password) {
      res.status(404).send({
        isPass: false,
        message: "User Not Found",
      });
    } else {
      try {
        const isPass = await bcrypt.compare(req.body.password, password);
        res
          .status(200)
          .send(
            isPass
              ? { isPass, message: "password matched" }
              : { isPass, message: "password not matched" }
          );
      } catch (e) {
        console.error(`internal Error: ${e} check Password!!`);
        res.status(401).send({
          isPass: false,
          message: "Internal Error: Password not matched",
        });
      }
    }
  } catch (e) {
    res.status(500).send({ isPass: false, message: `Error occurred ${e}` });
  }
});

router.route("/add-user").post(async (req, res) => {
  try {
    let data = await UsersDB.addUser(req.body);
    data = { data };
    res.send(data);
  } catch (e) {
    res.status(501).send({ isPass: false, message: `Error occurred ${e}` });
  }
});

export default router;
