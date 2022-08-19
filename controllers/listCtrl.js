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
};

const create = (req, res) => {
  Item.create({
    entry: req.body.entry,
    owner: req.body.owner,
    letter: req.body.letter,
  }).then((item) => {
    res.json(item);
  });
};

const update = async (req, res) => {
  console.log(req.body);
  let item = await Item.findByIdAndUpdate(req.body._id, {
    entry: req.body.entry,
    letter: req.body.letter,
  });
  res.json(item);
};

const deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json("Item deleted");
};

module.exports = {
  index,
  create,
  update,
  delete: deleteItem,
};
