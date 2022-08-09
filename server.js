const express = require("express");
const path = require("path");
// const favicon = require("serve-favicon");
const logger = require("morgan");

const app = express();

require("dotenv").config();
require("./db/connection");

app.use(logger("dev"));
app.use(express.json());

// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
// app.use(express.static(path.join(__dirname, 'build')))

app.use("/", require("./routes/userRoutes"));
app.use("/my-list", require("./routes/listRoutes"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
