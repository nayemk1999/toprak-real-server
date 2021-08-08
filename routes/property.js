const router = require("express").Router();
const Property = require("../models/PostData");

router.post("/add-post", async (req, res) => {
    const newProperty = req.body
    try {
      // Create new user
      const newPost = await new Property(newProperty);
  
      //   save and return response
      const property = await newPost.save();
      res.status(200).json(property);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/all-post", async (req, res) => {
    try {
      Property.find({})
        .then((result) => {
            res.send(result)
        })
    } catch (err) {
        console.log(error)
      res.status(500).json(err);
    }
  });
  module.exports = router;