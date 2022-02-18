const User = require("../../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    nickname: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC),
    firstLanguage: req.body.firstLanguage,
    secondLanguage: req.body.secondLanguage,
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user &&
      res
        .status(401)
        .json({ errorCode: 001, errorDetail: "email don't exist" });

    //暗号化されているパスワードを復号化
    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    ).toString(CryptoJS.enc.Utf8);

    decryptedPassword !== req.body.password &&
      res
        .status(401)
        .json({ errorCode: 002, errorDetail: "password is incorrect" });

    //Tokenを作成
    const accessToken = jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "1d" }
    );

    const { password, ...userInfo } = user._doc;
    res.status(200).json({ userInfo, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  signup,
  signin,
};
