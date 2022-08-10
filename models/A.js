const mongoose = require("mongoose");

const aSchema = new mongoose.Schema(
  // {
  //   entry: String,
  //   isDone: { type: Boolean, default: false },
  //   owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  // },
  {
    entry: String,
    isDone: { type: Boolean, default: false },
    owner: String,
  },
  {
    timestamps: true,
  }
);

const A = mongoose.model("A", aSchema);

module.exports = A;
