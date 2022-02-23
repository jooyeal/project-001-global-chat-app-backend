const User = require("../../models/User");
const CryptoJS = require("crypto-js");

//ユーザー情報修正
const modifyUser = async (req, res) => {
  try {
    const modifiedUser = await User.findByIdAndUpdate(req.params.id, {
      $set: {
        nickname: req.body.nickname,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC),
        firstLanguage: req.body.firstLanguage,
        secondLanguage: req.body.secondLanguage,
      },
    });
    res.status(200).json(modifiedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(500).json(500);
  }
};

const addFollows = async (req, res) => {
  try {
  } catch (err) {}
};

module.exports = { modifyUser, deleteUser };
