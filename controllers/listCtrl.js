const A = require("../models/A");
const B = require("../models/B");
const C = require("../models/C");

const cron = require("node-cron");

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

  let aItems = await A.find({ owner: req.query.owner });

  let bItems = await B.find({ owner: req.query.owner });

  let cItems = await C.find({ owner: req.query.owner });

  let list = {
    aList: aItems,
    bList: bItems,
    cList: cItems,
  };

  res.json(list);
};

const create = (req, res) => {
  if (req.body.letter === "a") {
    A.create({ entry: req.body.entry, owner: req.body.owner }).then(() => {
      res.json("A item CREATED");
    });
  }
  if (req.body.letter === "b") {
    B.create({ entry: req.body.entry, owner: req.body.owner }).then(() => {
      res.json("B item CREATED");
    });
  }
  if (req.body.letter === "c") {
    C.create({ entry: req.body.entry, owner: req.body.owner }).then(() => {
      res.json("C item CREATED");
    });
  }
};

const update = (req, res) => {
  console.log(req.body);
  if (req.params.letter.toLowerCase() === "a") {
    A.findByIdAndUpdate(
      req.params.id,
      { entry: req.body.entry },
      { new: true }
    ).then(() => {
      res.json("aList Item UPDATE");
    });
  }
  if (req.params.letter.toLowerCase() === "b") {
    B.findByIdAndUpdate(
      req.params.id,
      { entry: req.body.entry },
      { new: true }
    ).then(() => {
      res.json("bList Item UPDATE");
    });
  }
  if (req.params.letter.toLowerCase() === "c") {
    C.findByIdAndUpdate(
      req.params.id,
      { entry: req.body.entry },
      { new: true }
    ).then(() => {
      res.json("cList Item UPDATE");
    });
  }
};

const deleteItem = async (req, res) => {
  if (req.params.letter.toLowerCase() === "a") {
    await A.findByIdAndDelete(req.params.id);
    res.json("aList item DELETED");
  }
  if (req.params.letter.toLowerCase() === "b") {
    await B.findByIdAndDelete(req.params.id);
    res.json("bList item DELETED");
  }
  if (req.params.letter.toLowerCase() === "c") {
    await C.findByIdAndDelete(req.params.id);
    res.json("cList item DELETED");
  }
};

module.exports = {
  index,
  create,
  update,
  delete: deleteItem,
};
