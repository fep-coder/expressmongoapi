var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
    // .connect("mongodb://127.0.0.1:27017/mongoapi")
    .connect(process.env.DB)
    .then(() => console.log("Connected"))
    .catch((error) => console.log(error));

var indexRouter = require("./routes/index");
var customersRouter = require("./routes/customers");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/customers", customersRouter);

module.exports = app;
