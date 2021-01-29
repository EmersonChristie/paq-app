const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { UserModel } = require("../database/schema");

const setup = () => {
  // The result of the serializeUser method is attached to the session as req.session.passport.user
  passport.serializeUser((user, done) => done(null, user._id));

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await UserModel.findById(id);
      console.log(
        "🚀 ~ file: utils.js ~ line 14 ~ passport.deserializeUser ~ user",
        user
      );
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  });
};

const signToken = async (user) => {
  const jwtString = await jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: 604800, // Expires in 7 days
  });

  // console.log(
  //   "🚀 ~ file: utils.js ~ line 29 ~ signToken ~ jwtString",
  //   jwtString
  // );

  console.log(
    "🚀 ~ file: utils.js ~ line 27 ~ signToken ~ process.env.JWT_SECRET",
    process.env.JWT_SECRET
  );

  jwt.verify(jwtString, process.env.JWT_SECRET, function (err, data) {
    console.log("In verify!!!!!!!!!");
    console.log(err, data);
  });

  return jwtString;
};

module.exports = { setup, signToken };
