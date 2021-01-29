const express = require("express");
const { to } = require("await-to-js");
const { createUser, getUserByEmail } = require("../database/user");
const router = express.Router();
const passport = require("passport");

router.get(
  "/me",
  passport.authenticate(
    "jwt",
    { session: false },
    // (err, user, info) => {
    //   console.log("ERR: ", err); // returns null
    //   console.log("USER: ", user); // returns false
    //   console.log("INFO: ", info); /// undefined
    // }),
    (req, res) => {
      if (req.user) {
        console.log("Request USER: ", req.user);
      } else {
        console.log("NO USER in REQ");
      }
      return res.status(200).json({ success: true, data: user });
    }
  )
);

module.exports = router;
