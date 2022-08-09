const mongoose = require("mongoose");

const bSchema = new mongoose.Schema(
  {
    entry: String,
    isDone: { type: Boolean, default: false },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("B", bSchema);
