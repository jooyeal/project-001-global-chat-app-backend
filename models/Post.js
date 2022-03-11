const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photos: [
      {
        url: {
          type: String,
          required: true,
        },
      },
    ],
    audios: [
      {
        url: {
          type: String,
          required: true,
        },
      },
    ],
    videos: [
      {
        url: {
          type: String,
          required: true,
        },
      },
    ],
    comments: [
      {
        userId: {
          type: String,
          required: true,
        },
        nickname: {
          type: String,
          required: true,
        },
        desc: {
          type: String,
          required: true,
        },
      },
    ],
    likes: [
      {
        userId: {
          type: String,
          required: true,
        },
        nickname: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
