const router = require("express").Router();
const bcrypt = require("bcrypt");
const Review = require("../models/ReviewData");

router.post("/add-review", async (req, res) => {
    const newReview = req.body
    try {
      // Create new user
      const newReview = await new Review(newReview);
  
      //   save and return response
      const review = await newReview.save();
      res.status(200).json(review);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/all-review", async (req, res) => {
    try {
      Review.find({})
        .then((result) => {
            res.send(result)
        })
    } catch (err) {
        console.log(error)
      res.status(500).json(err);
    }
  });

  module.exports = router;