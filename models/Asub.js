const mongoose = require("mongoose");

const aSubSchema = new mongoose.Schema(
  {
    entry: String,
    isDone: { type: Boolean, default: false },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "A", require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Asub", aSubSchema);
