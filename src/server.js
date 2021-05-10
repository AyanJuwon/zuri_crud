const port = 3000;

const express = require("express");
const app = express();
app.use(express.json)
const bodyParser = require("body-parser");
const cors = require("cors");
// etup chema
const User = require('./models/userSchema');
// SETUP MONGOOSE
const dbSetup = require('./database/setup')

const mongoose = require('mongoose')
dbSetup();



app.listen(port,()=> console.log(`app listening on port ${port}`))