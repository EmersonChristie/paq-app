const express = require("express");
const app = express();

const { urlencoded, json } = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");

const router = require("./router");
const { initialiseAuth } = require("./auth");
const { connectToDatabase } = require("./database/connection");

require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";

const port = 8080;

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cookieParser());

app.use(passport.initialize());

router(app);
initialiseAuth(app);

connectToDatabase()
  .then(() => {
    console.log("connected");

    app.get("/", (req, res) => {
      res.send("Emersons App is Working");
    });

    app.listen(port, () => {
      console.log(`PAQ app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// app.get("/", (req, res) => {
//   res.send("Hey");
// });
