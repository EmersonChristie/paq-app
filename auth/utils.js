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
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  });
};

const signToken = (user) => {
  console.log("secret", process.env.JWT_SECRET);
  return (
    jwt.sign({ data: user }),
    process.env.JWT_SECRET,
    {
      expiresIn: 604800, // Expires in 7 days
    }
  );
};

const hashPassword = async (password) => {
  if (!password) {
    throw new Error("No Password Provided");
  }

  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const verifyPassword = async (candidate, actual) => {
  return await bcrypt.compare(candidate, actual);
};

module.exports = { setup, signToken, hashPassword, verifyPassword };
