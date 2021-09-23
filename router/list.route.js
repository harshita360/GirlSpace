const express = require("express");
const List = require("../model/list.model");
const router = express.Router();
var assert = require("assert");
var ObjectId = require('mongodb').ObjectID;

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


router.post("/auth/likes",async(req,res)=>{
  try{
  List.update({ "_id": ObjectId("612f8d05acde5dc02dedddaf") }, {$set:{star:1}});
}
catch(err)
{
  console.log(err);
}

})

// router.post("/auth/likes",async (req,res)=>{
//
//     //var collection = db.collection("updates")
//     console.log("heelooo");
//     console.log(req.id);
//     console.log(req.star);
//   //   List.update({_id:req.id}, {$set:{star:req.star+1}}, function(err, result) {
//   // });
//     try {
//   List.update({"_id": ObjectId("5f4ca511e4c92f27ac670b23")}, { $inc: { "star": 1 } });
//   } catch (e) {
//     console.log("error is" +e);
//   }
// });


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
