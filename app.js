const express = require("express");
const { router } = require("./router/index");

const app = express();
// app.use("/", (req, res, next) => {
//   console.log("Hello from middleware");
//   next();
// });
// app.use("/", (req, res, next) => {
//   console.log("Hello from middleware second time");
// });
app.use("/api", express.json());
app.use("/api", router);
app.use("/", (err, req, res, next) => {
  console.log("Hello from middleware");
  next();
});

module.exports = { app };
