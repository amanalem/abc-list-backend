const A = require("../models/A");
const B = require("../models/B");
const C = require("../models/C");

const cron = require("node-cron");
const Item = require("../models/Item");

cron.schedule(
  " 00 29 15 * * *",
  () => {
    console.log("The time is 3:24pm");
  },
  false,
  "America/New_York"
);

const index = async (req, res) => {
  console.log("index all function hit");

  let items = await Item.find({ owner: req.query.owner });
  res.json(items);

  // let aItems = await A.find({ owner: req.query.owner });

  // let bItems = await B.find({ owner: req.query.owner });

  // let cItems = await C.find({ owner: req.query.owner });

  // let list = {
  //   aList: aItems,
  //   bList: bItems,
  //   cList: cItems,
  // };

  // res.json(list);
};

const create = (req, res) => {
  Item.create({
    entry: req.body.entry,
    owner: req.body.owner,
    letter: req.body.letter,
  }).then((item) => {
    res.json(item);
  });
  // if (req.body.letter === "a") {
  //   A.create({ entry: req.body.entry, owner: req.body.owner }).then(() => {
  //     res.json("A item CREATED");
  //   });
  // }
  // if (req.body.letter === "b") {
  //   B.create({ entry: req.body.entry, owner: req.body.owner }).then(() => {
  //     res.json("B item CREATED");
  //   });
  // }
  // if (req.body.letter === "c") {
  //   C.create({ entry: req.body.entry, owner: req.body.owner }).then(() => {
  //     res.json("C item CREATED");
  //   });
  // }
};

const update = async (req, res) => {
  console.log(req.body);
  let item = await Item.findByIdAndUpdate(req.body._id, {
    entry: req.body.entry,
    letter: req.body.letter,
  });
  res.json(item);
  // if (req.params.letter.toLowerCase() === "a") {
  //   A.findByIdAndUpdate(
  //     req.params.id,
  //     { entry: req.body.entry },
  //     { new: true }
  //   ).then(() => {
  //     res.json("aList Item UPDATE");
  //   });
  // }
  // if (req.params.letter.toLowerCase() === "b") {
  //   B.findByIdAndUpdate(
  //     req.params.id,
  //     { entry: req.body.entry },
  //     { new: true }
  //   ).then(() => {
  //     res.json("bList Item UPDATE");
  //   });
  // }
  // if (req.params.letter.toLowerCase() === "c") {
  //   C.findByIdAndUpdate(
  //     req.params.id,
  //     { entry: req.body.entry },
  //     { new: true }
  //   ).then(() => {
  //     res.json("cList Item UPDATE");
  //   });
  // }
};

const deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json("Item deleted");
  // if (req.params.letter.toLowerCase() === "a") {
  //   await A.findByIdAndDelete(req.params.id);
  //   res.json("aList item DELETED");
  // }
  // if (req.params.letter.toLowerCase() === "b") {
  //   await B.findByIdAndDelete(req.params.id);
  //   res.json("bList item DELETED");
  // }
  // if (req.params.letter.toLowerCase() === "c") {
  //   await C.findByIdAndDelete(req.params.id);
  //   res.json("cList item DELETED");
  // }
};

module.exports = {
  index,
  create,
  update,
  delete: deleteItem,
};
