const express = require("express");
const Comment = require("../model/comment.model");
const router = express.Router();
var assert = require("assert");

router.get("/show", (req, res) => {
  Comment.find()

    .sort({ createdAt: -1 })
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json("Error" + err));
});

router.post("/add", async (req, res) => {
  //console.log(req.user);
  const comment = new Comment({
    user: req.body.user,
    content: req.body.content,
  });
  try {
    const savedComment = await comment.save();

    res.send(savedComment);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
