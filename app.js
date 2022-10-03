const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/usersRoute");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/users", usersRouter);

// home Route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
// route not found
app.use((req, res, next) => {
  res.status(404).json({ message: "route not found" });
});
// server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Some went wrong" });
});

module.exports = app;
