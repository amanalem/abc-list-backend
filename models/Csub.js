const mongoose = require("mongoose");

const cSubSchema = new mongoose.Schema(
  {
    entry: String,
    isDone: { type: Boolean, default: false },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "C", require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Csub", cSubSchema);
