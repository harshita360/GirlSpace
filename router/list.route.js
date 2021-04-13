const express = require("express");
const List = require("../model/list.model");
const router = express.Router();
var assert = require("assert");

// router.get("/auth/data", async (req, res) => {
//   const lists = list.find({});
//   try {
//     res.send(lists);
//   } catch (err) {
//     res.send(err);
//   }
// });

router.post("/auth/post", async (req, res) => {
  const list = new List(req.body);

  try {
    await list.save();
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/auth/getupdates", async (req, res) => {
  try {
    const updates = await List.find({});
    console.log(updates);
    res.send(updates);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
// cursor.forEach(
//   function (err, doc) {
//     if (err) {
//       console.log("its an error");
//     }
//     resultArray.push(doc);
//   },
//   function () {
//     res.send({ express: resultArray });
//     console.log(resultArray);
//   }
// );
