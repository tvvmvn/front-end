const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const indexRouter = require("./routes/index");

// # DATABASE
const mongoose = require("mongoose");
const seed = require("./seed");

mongoose.connect("mongodb://localhost:27017/boilerplate", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// # MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public", {
  dotfiles: "ignore",
  etag: true,
  extensions: [],
  index: false,
  lastModified: true,
  maxAge: "1d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  }
}));
app.use(express.static("data"));
app.use('/', indexRouter);

// # ERROR HANDLER
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json(err); 
})

// # SERVER RUNNING MESSAGE
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})
