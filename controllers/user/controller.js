const User = require("../../models/userSchema");
const mongoose = require('mongoose');
exports.createNewData = (req, res) => {
  const userData = req.body.userData;
  console.log(userData);
  // User.create({
  //   firstname: req.body.firstname,
  //   lastname: req.body.lastname,
  //   email: req.body.email,
  //   country: req.body.country,
  // })
  const newData = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    country: req.body.country,
  });
  newData.save(function (err) {
    console.log("i am here");
    if (err) return handleError(err);
    // save

    return res.status(200).json({ message: "New Data created", newData });
  });
},
  (err, newData) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
  };

exports.fetchSingleData = (req, res) => {
  console.log(req.params.id);
  console.log(req.query.id);
  User.findOne({ _id: req.query.id }, (err, userData) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!userData) {
      return res.status(404).json({ message: "Data not found" });
    } else {
      return res.status(200).json({ userData });
    }
  });
};

exports.fetchAllData = (req, res) => {
  User.find({}, (err, userData) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: err });
    } else if (!userData) {
      return res.status(404).json({ message: "Data not found" });
    } else {
      return res.status(200).json({ userData });
    }
  });
};

exports.editData = (req, res) => {
  User.findByIdandUpdate(
    req.query.id,
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
};

exports.deleteData = (req, res) => {
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
};
