/**
 * @description An express application.
 * @author dbarenholz
 * @version 1.0.0
 */
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const winston = require("./config/winston");
const { prettyString } = require("./utils");

// Create String.format method for us to use in the code.
if (!String.format) {
  String.format = function (format) {
    let args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] != "undefined" ? args[number] : match;
    });
  };
}

// Create Array.last method for us to use in the code.
if (!Array.last) {
  Array.last = function () {
    return this[this.length - 1];
  };
}

// Create express application
const app = express();
app.use(morgan("short", { stream: winston.stream }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PATCH");
    return res.status(200).json({});
  }
  next();
});

// Set routes
const numberRoutes = require("./routes/numbers");
app.use("/numbers", numberRoutes);

// Error handling
app.use((_req, _res, next) => {
  // Set 404 error if something is not found otherwise
  const err = new Error("Not Found");
  err.status = 404;
  err.message = "Something went wrong here, my friend.";
  next(err);
});
app.use((err, _req, res, _next) => {
  winston.info("Application error:\n" + prettyString(err));
  res.status(err.status);
  res.send(err.message);
});

module.exports = app;
