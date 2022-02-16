const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//SIGNUP
router.post("/signup", async (req, res) => {
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
});

//SIGNIN
router.post("/signin", async (req, res) => {
  try {
  } catch (err) {}
});

module.exports = router;
