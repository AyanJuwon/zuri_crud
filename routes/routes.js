const express = require("express");
const router = express.Router();
const dataCtrl = require("../controllers/user/controller");
router.get("/", (req, res) => {
  res.send("Hello, World! welcome to the user data node webrouter");
  console.log("i am connected");
});

router.post("/user-data", dataCtrl.createNewData);

// GET request to retrieve single data
router.get("/getuser", dataCtrl.fetchSingleData);

// GET request to retrieve all data
router.get("/user-data", dataCtrl.fetchAllData);

//  PUT request to update data

router.put("user-data/:id", dataCtrl.editData);
// DELETE request to destroy data

router.delete("/user-data/:id", dataCtrl.deleteData);

module.exports = router;
