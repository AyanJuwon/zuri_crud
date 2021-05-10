const port = 3000;
const express = require("express");
const app = express();
app.use(express.json)
const bodyParser = require("body-parser");
const routes = require('./routes/dataRoutes')
const dbSetup = require('./database/setup')
const User = require('./models/userSchema');

const mongoose = require('mongoose')

// Setup Schema
// SETUP MONGOOSE

dbSetup();
app.use(routes)

app.listen(port,()=> console.log(`app listening on port ${port}`))