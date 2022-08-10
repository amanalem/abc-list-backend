const A = require("../models/A");
const B = require("../models/B");
const C = require("../models/C");

const index = async (req, res) => {
  console.log("index all function hit");

  let list = {
    aList: aItems,
    bList: bItems,
    cList: cItems,
  };

  let aItems = await A.find({ owner: req.query.owner });

  let bItems = await B.find({ owner: req.query.owner });

  let cItems = await C.find({ owner: req.query.owner });

  res.json(list);
};

module.exports = {
  index,
};
