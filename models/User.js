const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

require("dotenv").config();

const saltRounds = process.env.SALT_ROUNDS;

const userSchema = new mongoose.Schema(
  {
    email: { type: String, require: true, lowercase: true, unique: true },
    password: String,
  },
  {
    timestamps: true,
  }
);

userSchema.set("toJSON", {
  transform: function (doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  },
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  // password has been changed
  bcrypt.hash(user.password, saltRounds, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;
