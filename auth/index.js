const utils = require("./utils");
const strategies = require("./strategies");

const pipe = (...functions) => (args) =>
  functions.reduce((arg, fn) => fn(arg), args);

const initialiseAuth = (app) => {
  utils.setup();

  pipe(strategies.JWTStrategy)(app);
};

module.exports = { utils, initialiseAuth, strategies };
