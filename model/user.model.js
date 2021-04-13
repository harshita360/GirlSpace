const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
  email: {
    type: String,
  },

  password: {
    type: String,
  },
});
userSchema.statics.findUser = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    //if there is no user with that email
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password); //checking whether password entered matches the actual hash password stored.
  if (!isMatch) {
    //password-the one which user entered
    return;
  }
  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    // if the password is modified
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("ModelName", userSchema);

module.exports = User;
