const express = require("express");
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const db = require('./database/setup')
const routes = require("./routes/routes")
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);
console.log(routes)
app.get("/", (req, res) => {
  res.send("Hello, World! welcome to the user data node webrouter");
  // console.log("i am connected");
});
db();

app.listen(port, () => console.log(`app listening on port ${port}`));