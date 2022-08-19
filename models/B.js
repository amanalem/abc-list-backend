const mongoose = require("mongoose");

const bSchema = new mongoose.Schema(
  {
    entry: String,
    isDone: { type: Boolean, default: false },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  // {
  //   entry: String,
  //   isDone: { type: Boolean, default: false },
  //   owner: String,
  // },
  {
    timestamps: true,
  }
);

const B = mongoose.model("B", bSchema);

module.exports = B;
