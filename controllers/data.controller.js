const db = require("../models");
const Data = db.UserData;

// Create and Save a new Data
exports.create = (req, res) => {
     if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Data
  const data = new Data({
    Name: req.body.name,
    description: req.body.email,
    country: req.body.country,
  });

  // Save Data in the database
  data
    .save(data)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Data."
      });
    });
};

// Retrieve all Data from the database.
exports.findAll = (req, res) => {const name = req.query.name;
var condition = name
  ? { Name: { $regex: new RegExp(name), $options: "i" } }
  : {};

UserData.find(condition)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tutorials.",
    });
  });};

// Find a single Data with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    UserData.findById(id)
      .then((data) => {
        if (!data)
          res.status(404).send({ message: "Not found Data with id " + id });
        else res.send(data);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving Data with id=" + id });
      });
};

// Update a Data by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!",
      });
    }

    const id = req.params.id;

    UserData.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Data with id=${id}. Maybe Data was not found!`,
          });
        } else res.send({ message: "Data was updated successfully." });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Data with id=" + id,
        });
      });
};

// Delete a Data with the specified id in the request
exports.delete = (req, res) => {const id = req.params.id;

UserData.findByIdAndRemove(id)
  .then((data) => {
    if (!data) {
      res.status(404).send({
        message: `Cannot delete Data with id=${id}. Maybe Data was not found!`,
      });
    } else {
      res.send({
        message: "Data was deleted successfully!",
      });
    }
  })
  .catch((err) => {
    res.status(500).send({
      message: "Could not delete Data with id=" + id,
    });
  });};

// Delete all Datas from the database.
exports.deleteAll = (req, res) => {
    UserData.deleteMany({})
      .then((data) => {
        res.send({
          message: `${data.deletedCount} Dara were deleted successfully!`,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all data.",
        });
      });
};

// Find all published Datas
exports.findAllPublished = (req, res) => {
    UserData.find({ published: true })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving data.",
        });
      });
};
