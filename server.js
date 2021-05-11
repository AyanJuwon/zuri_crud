const express = require("express");
const app = express();
const port = 4000;
const username = "oluwajuwon";
const password = "EmmAnUEl";
app.use(express.json())
const mongoose = require('mongoose')
const connectionString = `mongodb+srv://${username}:${password}@cluster0.vqzgm.mongodb.net/user-data?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useFindAndModify: false,
},
  (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('database connected')
    }
  });
  
app.get("/", (req, res) =>
{
  res.send("Hello, World! welcome to the user data node webapp")
  console.log('i am connected')
});




const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  country: String,
  email: String,
});


const User = mongoose.model("User", userSchema);
app.post(
  "/user-data",
  (req, res) => {
    const userData = req.body.userData;
    console.log(userData);
    User.create({
      firstname: req.body.title,
      lastname: req.body.lastname,
      email: req.body.email,
      country: req.body.country,
    });
  },
  (err, newUser) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else {
      return res.status(200).json({ message: "New Data created", newUser });
    }
  }
);

// GET request to retrieve single data
app.get("/user-data/:id", (req, res) => {
  User.findById(req.params.id, (err, userData) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!userData) {
      return res.status(404).json({ message: "Data not found" });
    } else {
      return res.status(200).json({ userData });
    }
  });
});

// GET request to retrieve all data
app.get("/user-data", (req, res) => {
  User.find({}, (err, userData) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!userData) {
      return res.status(404).json({ message: "Data not found" });
    } else {
      return res.status(200).json({ userData });
    }
  });
});

//  PUT request to update data

app.put("user-data/:id", (req, res) => {
  User.findByIdandUpdate(
    req.params.id,
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      country: req.body.country,
    },
    (err, userData) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else if (!userData) {
        return res.status(404).json({ message: "User not found" });
      } else {
        user.save((err, saveduserData) => {
          if (err) {
            return res.status(500).json({ message: err });
          } else {
            return res
              .status(200)
              .json({ message: "data updated succesfully" });
          }
        });
      }
    }
  );
});
// DELETE request to destroy data

app.delete("/user-data/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, userData) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!userData) {
      return res.status(404).json({ message: "User not found" });
    } else {
      return res.status(200).json({
        message: " Data deleted succesfully",
      });
    }
  });
});


app.listen(port, () => console.log(`app listening on port ${port}`));