// /api/user-data: GET, POST, DELETE
// /api/user-data/:id: GET, PUT, DELETE

module.exports = (app) => {
  const data = require("../controllers/data.controller.js");

  var router = require("express").Router();

  // Create a new data
  router.post("/", data.create);

  // Retrieve all data
  router.get("/", data.findAll);

  // Retrieve all published data
  router.get("/published", data.findAllPublished);

  // Retrieve a single data with id
  router.get("/:id", data.findOne);

  // Update a data with id
  router.put("/:id", data.update);

  // Delete a data with id
  router.delete("/:id", data.delete);

  // Create a new data
  router.delete("/", data.deleteAll);

  app.use("/api/data", router);
};