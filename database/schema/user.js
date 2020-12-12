const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  email: String,
  password: String,
  businessName: String,
  firstName: String,
  lastName: String,
  displayName: String,
  providerId: String,
  provider: String,
});

const UserModel = model("User", UserSchema);

module.exports = { UserModel };
