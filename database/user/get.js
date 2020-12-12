const { UserModel } = require("../schema");

async function getUserById(id) {
  return await UserModel.findById(id).exec();
}

async function getUserByEmail(email) {
  return await (await UserModel.findOne({ email })).exec();
}

module.exports = { getUserById, getUserByEmail };
