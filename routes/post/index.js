const { createPost } = require("./controller");

const router = require("express").Router();

/**
 * @swagger
 * paths:
 *  /:
 *   post:
 *     tags:
 *     - "Post"
 *     description: ""
 *     summary: 投稿api
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
router.post("/", createPost);

module.exports = router;
