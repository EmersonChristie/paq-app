const passport = require("passport");
const passportJWT = require("passport-jwt");
const { to } = require("await-to-js");

const { getUserById } = require("../../database/user");
const { signToken } = require("../utils");

const JWTStrategy = passportJWT.Strategy;

const cookieExtractor = (req) => {
  let jwt = null;

  if (req && req.cookies) {
    jwt = req.cookies["jwt"];
  }

  return jwt;
};

const strategy = () => {
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: cookieExtractor,
        secretOrKey: process.env.JWT_SECRET,
      },
      async (jwtPayload, done) => {
        console.log("in verify callback!");
        const [err, user] = await to(getUserById(jwtPayload.data._id));

        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
          // or you could create a new account
        }
      }
    )
  );

  // const strategyOptions = {
  //   jwtFromRequest: cookieExtractor(req),
  //   secretOrKey: process.env.JWT_SECRET,
  //   passReqToCallback: true,
  // };

  // const verifyCallback = async (req, jwtPayload, done) => {
  //   console.log("in verify callback!");
  //   const [err, user] = await to(getUserById(jwtPayload.data._id));
  //   // await-to-js simplifies Promise err handling
  //   // to() => (err, null) for error or (null, data) for success
  //   if (err) {
  //     return cb(err);
  //   }

  //   req.user = user;
  //   console.log(
  //     "🚀 ~ file: jwt.js ~ line 26 ~ verifyCallback ~     req.user",
  //     req.user
  //   );

  //   return cb(null, user);
  // };

  // passport.use(new JWTStrategy(strategyOptions, verifyCallback));
};

const login = (req, user) => {
  return new Promise((resolve, reject) => {
    // TODO
    req.login(user, { session: false }, (err) => {
      if (err) {
        return reject(err);
      }

      return resolve(signToken(user));
    });
  });
};

module.exports = { strategy, login };
