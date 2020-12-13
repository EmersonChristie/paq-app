const express = require("express");
const { to } = require("await-to-js");
const { verifyPassword, hashPassword } = require("../auth/utils");
const { login } = require("../auth/strategies/jwt");
const { createUser, getUserByEmail } = require("../database/user");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const [err, user] = await to(getUserByEmail(email));

  const authenticationError = () => {
    return res
      .status(500)
      .json({ success: false, data: "Autherntication error!" });
  };
  const verified = await verifyPassword(password, user.password);
  if (!verified) {
    console.error("Passwords do not match");
    return authenticationError();
  }

  const [loginErr, token] = await to(login(req, user));

  if (loginErr) {
    console.error("Log in error", loginErr);
    return authenticationError();
  }
  return res
    .status(200)
    .cookie("jwt", token, {
      // TODO Make cookie secure when server is Secure HTTPS
      // secure:
      //   process.env.NODE_ENV == `production` &&
      //   process.env.SERVER_URL.includes("https"),
      // maxAge: Date.now() + 60 * 60 * 1000 * 4,
      // domain:
      //   process.env.NODE_ENV == `production`
      //     ? process.env.SERVER_URL.replace(/http:\/\/|https:\/\//g, "")
      //     : "localhost",

      httpOnly: true,
    })
    .json({ success: true, data: "/" });
});

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  // validate email
  if (!/\b\w+\@\w+\.\w+(?:\.\w+)?\b/.test(email)) {
    return res
      .status(500)
      .json({ success: false, data: "Enter a valid email address." });
  } else if (password.length < 5 || password.length > 20) {
    return res.status(500).json({
      success: false,
      data: "Password must be between 5 and 20 characters.",
    });
  }

  let [err, user] = await to(
    createUser({
      firstName,
      lastName,
      email,
      password: await hashPassword(password),
    })
  );

  if (err) {
    return res
      .status(500)
      .json({ success: false, data: "Email is already taken" });
  }

  const [loginErr, token] = await to(login(req, user));

  if (loginErr) {
    console.error(loginErr);
    return res
      .status(500)
      .json({ success: false, data: "Authentication error!" });
  }

  return res
    .status(200)
    .cookie("jwt", token, {
      // TODO Make cookie secure when server is Secure HTTPS
      // secure:
      //   process.env.NODE_ENV == `production` &&
      //   process.env.SERVER_URL.includes("https"),
      // maxAge: Date.now() + 60 * 60 * 1000 * 4,
      // domain:
      //   process.env.NODE_ENV == `production`
      //     ? process.env.SERVER_URL.replace(/http:\/\/|https:\/\//g, "")
      //     : "localhost",

      httpOnly: true,
    })
    .json({
      success: true,
      data: "/",
    });
});

module.exports = router;
