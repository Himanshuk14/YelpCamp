const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
mongoose
  .connect("mongodb://127.0.0.1:27017/yelp-camp")
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Oops ERROR!!!!");
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
//app.use(methodOverride("_method"));

app.listen(8080, () => {
    console.log("Server running on port 8080");
})

app.get("/", (req, res) => {
  res.send("My first page");
});
