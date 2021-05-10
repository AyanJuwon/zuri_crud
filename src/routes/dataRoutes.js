
const express = require("express");
const router = express();
const router = express.Router();


// POST request to add new data

router.post(
  "/user-data",
  (req, res) => {
    const userdata = req.body.data;
    console.log(book);
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
router.get("/user-data/:id", (req, res) => {
    User.findById(req.params.id, (err, userdata) => {
      if (err) {
    return res.status(500).json({ message: err });
  } else if (!userdata) {
    return res.status(404).json({ message: "Data not found" });
  } else {
    return res.status(200).json({ user });
  }  
    })
  
});

// GET request to retrieve all data
router.get("/user-data", (req, res) => {
    User.find({}, (err, userdata) => { if (err) {
    return res.status(500).json({ message: err });
  } else if (!userdata) {
    return res.status(404).json({ message: "Data not found" });
  } else {
    return res.status(200).json({ user });
  }});
 
});

//  PUT request to update data

router.put("user-data/:id", (req, res) => {
    User.findByIdandUpdate(req.params.id, {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        country:req.body.country,
    }, (err, userdata) => {
        if (err) {
        return res.status(500).json({ message: err });
    } else if (!userdata) {
        return res.status(404).json({ message: "User not found" });
    } else {
        user.save((err, savedUserData) => {
            if (err) {
                return res.status(500).json({ message: err });
            } else {
                return res.status(200).json({ message: "data updated succesfully" });
            }
        });
    }     
    })
   
});
    // DELETE request to destroy data

router.delete("/user-data/:id", (req, res) => {
    Uer.findByIdAndDelete(req.params.id, (err, userdata) => {
            if (err) {
            return res.status(500).json({ message: err });
        } else if (!userdata) {
            return res.status(404).json({ message: "User not found" });
        } else {
            return res.status(200).json({
                message: " Data deleted succesfully",
            });
        } 
        })
       
    });
