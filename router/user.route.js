const express = require("express");
const User = require("../model/user.model");
const router = express.Router();

// router.get("/user", (req, res) => {
//   res.json({
//     msg: "hello",
//   });
// ----------});

router.post("/auth/signin", async (req, res) => {
  const { email, password } = req.body; //degenerate
  const user = await User.findUser(email, password);
  if (user) {
    req.session.user = user._id;

    res.json({
      message: "you are successfully logged in",
      auth: true,
    });
  } else {
    res.json({
      message: "unable to login",
      auth: false,
    });
  }
});
router.post("/auth/signup", (req, res) => {
  const user = new User(req.body);
  req.session.user = user._id;
  user
    .save()
    .then((result) => {
      res.json({
        message: "successfully created",
        auth: true,
      });
    })
    .catch((err) => {
      res.json({
        message: "Unable to create account",
        auth: false,
      });
    });
});

router.get("/auth/hassignedin", (req, res) => {
  if (req.session.user) {
    res.json({
      auth: true,
      message: "you are logged in",
    });
  }
  return res.json({
    auth: false,
    message: "you are not signed in",
  });
});

router.get("/auth/data", async (req, res) => {
  const users = await User.find({});
  try {
    console.log(users);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
