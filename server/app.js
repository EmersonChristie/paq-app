const express = require("express");
const cors = require("cors");
// const app = express();
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

app.use(
  cors({
    origin: `${process.env.DEV_BASE_URL}:3000`, // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTION",
    credentials: true,
  })
);

// app.use((req, res, next) => {
//   // res.header("Access-Control-Allow-Origin", "*");
//   // res.header(
//   //   "Access-Control-Allow-Headers",
//   //   "Origin, X-Requested-With, Content-Type, Accept"
//   // );
//   // res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   console.log(`Request: ${req.method} ${req.url}`);
//   next();
// });

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
