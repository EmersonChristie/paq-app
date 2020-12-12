const authRoutes = require("./auth.routes.js");

function Router(app) {
  app.use(`${process.env.BASE_API_URL}/auth`, authRoutes);
}

module.exports = Router;
