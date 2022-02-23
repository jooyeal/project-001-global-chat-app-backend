const {
  uploadPost,
  modifyPost,
  deletePost,
  addComment,
  modifyComment,
  getPostData,
  deleteComment,
  getPostDataAtPage,
  addLike,
  removeLike,
} = require("./controller");

const router = require("express").Router();

/**
 * @swagger
 * paths:
 *  /post:
 *   post:
 *     tags:
 *     - "Post"
 *     description: ""
 *     summary: 投稿する
 *     parameters:
 *      - name: "userId"
 *        in: "userId"
 *        type: string
 *        description: "投稿者固有id"
 *        required: true
 *      - name: "desc"
 *        in: "desc"
 *        type: string
 *        description: "投稿内容"
 *        required: true
 *      - name: "photos"
 *        in: "photos"
 *        type: array
 *        description: "画像"
 *        required: true
 *      - name: "audios"
 *        in: "audios"
 *        type: array
 *        description: "音声"
 *        required: true
 *      - name: "videos"
 *        in: "videos"
 *        type: array
 *        description: "動画"
 *        required: true
 *     responses:
 *       "200":
 *         description: 正常
 *         schema:
 *          $ref: '#/definitions/Post'
 *       "500":
 *         description: プログラムエラー
 */
router.post("/", uploadPost);

/**
 * @swagger
 * paths:
 *  /post/{id}:
 *   get:
 *     tags:
 *     - "Post"
 *     description: ""
 *     summary: IDでポストデータ取得
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       "200":
 *         description: 正常
 *         schema:
 *          $ref: '#/definitions/Post'
 *       "500":
 *         description: プログラムエラー
 */
router.get("/:id", getPostData);

/**
 * @swagger
 * paths:
 *  /post/page/{number}:
 *   get:
 *     tags:
 *     - "Post"
 *     description: ""
 *     summary: ページで５つづつポストデータ取得
 *     parameters:
 *       - in: path
 *         name: number
 *         required: true
 *     responses:
 *       "200":
 *         description: 正常
 *         schema:
 *          $ref: '#/definitions/Post'
 *       "500":
 *         description: プログラムエラー
 */
router.get("/page/:number", getPostDataAtPage);

/**
 * @swagger
 * paths:
 *  /post/{id}:
 *   put:
 *     tags:
 *     - "Post"
 *     description: ""
 *     summary: ポスト修正
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *       - name: desc
 *       - name: photos
 *       - name: audios
 *       - name: videos
 *     responses:
 *       "200":
 *         description: 正常
 *         schema:
 *          $ref: '#/definitions/Post'
 *       "500":
 *         description: プログラムエラー
 */
router.put("/:id", modifyPost);

/**
 * @swagger
 * paths:
 *  /post/{id}:
 *   delete:
 *     tags:
 *     - "Post"
 *     description: ""
 *     summary: ポストデータ削除
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       "200":
 *         description: 正常
 *         schema:
 *          $ref: '#/definitions/Post'
 *       "500":
 *         description: プログラムエラー
 */
router.delete("/:id", deletePost);

/**
 * @swagger
 * paths:
 *  /post/comment/{id}:
 *   get:
 *     tags:
 *     - "Post"
 *     description: ""
 *     summary: コメント追加
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *       - name: comment
 *         required: true
 *     responses:
 *       "200":
 *         description: 正常
 *         schema:
 *          $ref: '#/definitions/Post'
 *       "500":
 *         description: プログラムエラー
 */
router.post("/comment/:id", addComment);

/**
 * @swagger
 * paths:
 *  /post/comment/{id}:
 *   put:
 *     tags:
 *     - "Post"
 *     description: ""
 *     summary: コメント修正
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *       - name: commentId
 *         required: true
 *       - name: desc
 *         required: true
 *     responses:
 *       "200":
 *         description: 正常
 *         schema:
 *          $ref: '#/definitions/Post'
 *       "500":
 *         description: プログラムエラー
 */
router.put("/comment/:id", modifyComment);

/**
 * @swagger
 * paths:
 *  /post/comment/{id}:
 *   delete:
 *     tags:
 *     - "Post"
 *     description: ""
 *     summary: コメント削除
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *       - name: commentId
 *         required: true
 *     responses:
 *       "200":
 *         description: 正常
 *         schema:
 *          $ref: '#/definitions/Post'
 *       "500":
 *         description: プログラムエラー
 */
router.delete("/comment/:id", deleteComment);

/**
 * @swagger
 * paths:
 *  /post/like/{id}:
 *   post:
 *     tags:
 *     - "Post"
 *     description: ""
 *     summary: いいねする
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *       - name: like
 *         required: true
 *     responses:
 *       "200":
 *         description: 正常
 *         schema:
 *          $ref: '#/definitions/Post'
 *       "500":
 *         description: プログラムエラー
 */
router.post("/like/:id", addLike);

/**
 * @swagger
 * paths:
 *  /post/like/{id}:
 *   delete:
 *     tags:
 *     - "Post"
 *     description: ""
 *     summary: いいねをキャンセル
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *       - name: userId
 *         required: true
 *     responses:
 *       "200":
 *         description: 正常
 *         schema:
 *          $ref: '#/definitions/Post'
 *       "500":
 *         description: プログラムエラー
 */
router.delete("/like/:id", removeLike);

module.exports = router;
