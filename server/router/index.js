const authRoutes = require("./auth.routes.js");
const userRoutes = require("./user.routes.js");

const baseUrl = "/api";

function Router(app) {
  app.use(`${baseUrl}/auth`, authRoutes);

  app.use(`${baseUrl}/user`, userRoutes);
}

module.exports = Router;
