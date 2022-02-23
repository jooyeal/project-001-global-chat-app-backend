const Post = require("../../models/Post");

//投稿する
const uploadPost = async (req, res) => {
  const newPost = new Post({
    userId: req.body.userId,
    desc: req.body.desc,
    photos: req.body.photos,
    audios: req.body.audios,
    videos: req.body.videos,
  });

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

//投稿を修正
const modifyPost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          desc: req.body.desc,
          photos: req.body.photos,
          audios: req.body.audios,
          videos: req.body.videos,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

//投稿を削除
const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

//コメントを追加
const addComment = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $push: { comments: req.body.comment },
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

//コメント修正
const modifyComment = async (req, res) => {
  try {
    const updatedPost = await Post.findOneAndUpdate(
      {
        _id: req.params.id,
        "comments._id": req.body.commentId,
      },
      {
        $set: {
          "comments.$.desc": req.body.desc,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

//コメント削除
const deleteComment = async (req, res) => {
  try {
    const deletedComment = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { comments: { _id: req.body.commentId } },
      },
      { new: true }
    );
    res.status(200).json(deletedComment);
  } catch (err) {
    res.status(500).json(err);
  }
};

//IDで投稿データを取得
const getPostData = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

//ページで５つづつ投稿データを取得
const getPostDataAtPage = async (req, res) => {
  try {
    const post = await Post.find()
      .sort({ createdAt: 1 })
      .skip((req.params.number - 1) * 5)
      .limit(5);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

//いいね
const addLike = async (req, res) => {
  try {
    const likedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $push: { likes: req.body.like } },
      { new: true }
    );
    res.status(200).json(likedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

//いいねキャンセル
const removeLike = async (req, res) => {
  try {
    const removedLikePost = await Post.findByIdAndUpdate(
      req.params.id,
      { $pull: { likes: { userId: req.body.userId } } },
      { new: true }
    );
    res.status(200).json(removedLikePost);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  uploadPost,
  modifyPost,
  deletePost,
  addComment,
  modifyComment,
  deleteComment,
  getPostData,
  getPostDataAtPage,
  addLike,
  removeLike,
};
