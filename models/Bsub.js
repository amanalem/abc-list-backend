const mongoose = require("mongoose");

const bSubSchema = new mongoose.Schema(
  {
    entry: String,
    isDone: { type: Boolean, default: false },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "B", require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bsub", bSubSchema);
