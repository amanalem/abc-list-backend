const A = require("../models/A");
const B = require("../models/B");
const C = require("../models/C");

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

const create = (req, res) => {};

const update = (req, res) => {};

const deleteItem = async (req, res) => {
  if (req.params.letter.toLowerCase() === "a") {
    await A.findByIdAndDelete(req.params.id);
    res.json("aList item deleted");
  }
  if (req.params.letter.toLowerCase() === "b") {
    await B.findByIdAndDelete(req.params.id);
    res.json("bList item deleted");
  }
  if (req.params.letter.toLowerCase() === "c") {
    await C.findByIdAndDelete(req.params.id);
    res.json("cList item deleted");
  }
};

module.exports = {
  index,
  create,
  update,
  delete: deleteItem,
};
