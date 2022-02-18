const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    nickname: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstLanguage: {
      type: String,
      required: true,
    },
    secondLanguage: {
      type: String,
      required: true,
    },
    follows: [
      {
        id: {
          type: String,
          required: true,
        },
        firstLanguage: {
          type: String,
          required: true,
        },
      },
    ],
    followers: [
      {
        id: {
          type: String,
          required: true,
        },
        firstLanguage: {
          type: String,
          required: true,
        },
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
