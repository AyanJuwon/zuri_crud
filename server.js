const port = 3000;


const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const  mongoose   = require("mongoose");
app.use(express.json)
const username = "zuri_data";
const password = "EmmAnUEl";
const connectionString = `mongodb+srv://${username}:${password}@cluster0.e7kyq.mongodb.net/user_data?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,

}, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(' db connection succesful')
  }
  
})


const userschema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  country: String,
  email:String,

})

const Book = mongoose.model('User',userschema)


// POST request to add new data

app.post('/user-data', (req,res) => {
  const user = req.body.data;
  console.log(book)
}
    

)


app.listen(port,()=> console.log(`app listening on port ${port}`))