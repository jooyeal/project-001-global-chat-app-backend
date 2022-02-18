const { signup, signin } = require("./controller");
const router = require("express").Router();

/**
 * @swagger
 * paths:
 *  /signup:
 *   post:
 *     tags:
 *     - "Auth"
 *     description: ""
 *     summary: 会員登録api
 *     parameters:
 *      - name: "email"
 *        in: "email"
 *        type: string
 *        description: "会員メール"
 *        required: true
 *      - name: "nickname"
 *        in: "nickname"
 *        type: string
 *        description: "ユーザー名"
 *        required: true
 *      - name: "password"
 *        in: "password"
 *        type: string
 *        description: "パスワード"
 *        required: true
 *      - name: "firstLanguage"
 *        in: "firstLanguage"
 *        type: string
 *        description: "母国語"
 *        required: true
 *      - name: "secondLanguage"
 *        in: "secondLanguage"
 *        type: string
 *        description: "興味がある言語"
 *        required: true
 *     responses:
 *       "200":
 *         description: 正常
 *         schema:
 *          $ref: '#/definitions/User'
 *       "500":
 *         description: プログラムエラー
 */
router.post("/signup", signup);

/**
 * @swagger
 * paths:
 *  /signin:
 *   post:
 *     tags:
 *     - "Auth"
 *     description: ""
 *     summary: ログイン
 *     parameters:
 *      - name: "email"
 *        in: "email"
 *        type: string
 *        description: "会員メール"
 *        required: true
 *      - name: "password"
 *        in: "password"
 *        type: string
 *        description: "パスワード"
 *        required: true
 *     responses:
 *       "200":
 *         description: 正常
 *         schema:
 *          $ref: '#/definitions/LoginSuccess'
 *       "401":
 *         description: ""
 *       "500":
 *         description: "プログラムエラー"
 */
router.post("/signin", signin);

module.exports = router;
