const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("WORK!!");
});

app.listen(port, () => {
  console.log(`PAQ app listening at http://localhost:${port}`);
});
