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



// POST request to add new data

app.post('/user-data', (req,res) => {
  const user = req.body.data;
  console.log(book)
  User.create({
    firstname: req.body.title,
    lastname: req.body.lastname,
    email:req.body.email,
    country:req.body.country,
  })
}, (err, newUser) => {
    if (err) {
      return res.status(500).json({message:err})
    } else {
      return res.status(200).json({message: "New User created", newUser})
    }
}
    

)


// GET request to retrieve single data
app.get('/user-data/:id', (req, res) => {
  if (err) {
    return res.status(500).json({ message: err });
  } else if (!user) {
    return res.status(404).json({ message: "User not found" });

  } else {
    return res.status(200).json({user})
  }
})


//  PUT request to update data

app.put('user-data/:id' , (req,res)=>{
  if (err) {
    return res.status(500).json({ message: err });
  } else if (!user) {
    return res.status(404).json({ message: "User not found" });
  } else {
    user.save((err, savedUser) => {
      if (err) {
        return res.status(500).json({message:err})
      }
      else {
        return res.status(200).json({message: 'data updated succesfully'})
      }
    });
  }

// DELETE request to destroy data

  app.delete('/user-data/:id', (req, res) => {
    if (err) {
      return res.status(500).json({ message:err})
    } else if (!user) {
      return res.status(404).json({message:"User not found"})
    } else {
      return res.status(200).json({
        message:" Data deleted succesfully"
      })
    }
  })




})
app.listen(port,()=> console.log(`app listening on port ${port}`))