const mongoose = require("mongoose");

const cSchema = new mongoose.Schema(
  {
    entry: String,
    isDone: { type: Boolean, default: false },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  },
  {
    timestamps: true,
  }
);

const C = mongoose.model("C", cSchema);

module.exports = C;
