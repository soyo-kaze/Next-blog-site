import { Router } from "express";
import UsersDB from "../data/user.DAO.js";

import bcrypt from "bcrypt";

const router = new Router();

router.route("/user-data").post(async (req, res) => {
  try {
    let data = await UsersDB.getUserById(req.body.userId);
    // TODO: What if userNot found
    data = { data };
    res.send(data);
  } catch (e) {
    res.status(500).send(`Error occurred ${e}`);
  }
});
router.route("/login").post(async (req, res) => {
  try {
    let data = await UsersDB.compareUserPass(req.body.userId);
    console.log(data.length);
    // data = { data };
    let password = data.length != 0 ? data[0].password : false;
    if (!password) {
      res.send({
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
