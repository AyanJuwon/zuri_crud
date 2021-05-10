const mongoose = require("mongoose");

const username = "zuri_data";
const password = "EmmAnUEl";
const connectionString = `mongodb+srv://${username}:${password}@cluster0.e7kyq.mongodb.net/user_data?retryWrites=true&w=majority`;


module.exports = () => {
  mongoose.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(" db connection succesful");
    }
  }
);
  
}