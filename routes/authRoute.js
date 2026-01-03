/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Các API xác thực người dùng
 */
const authController = require("../controller/authController");
const router =require("express").Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Đăng nhập hệ thống
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userName
 *               - password
 *               - position
 *             properties:
 *               userName:
 *                 type: string
 *                 example: "admin"
 *               password:
 *                 type: string
 *                 example: "123"
 *               position:
 *                 type: string
 *                 example: "admin"
 *     responses:
 *       200:
 *         description: Đăng nhập thành công, trả về thông tin người dùng và token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "660b827b15dc4765a88fee1a"
 *                 userName:
 *                   type: string
 *                   example: "admin"
 *                 role:
 *                   type: string
 *                   example: "admin"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-04-02T03:58:51.250Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-04-02T03:58:51.250Z"
 *                 __v:
 *                   type: integer
 *                   example: 0
 *                 accessToken:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Sai thông tin đăng nhập
 */
router.post ("/login",authController.loginUser);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Đăng xuất
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Đăng xuất thành công
 */
router.post("/logout", authController.logoutUser);

/**
 * @swagger
 * /auth/veryfy:
 *   get:
 *     summary: Kiểm tra token hợp lệ
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token hợp lệ
 *       401:
 *         description: Token không hợp lệ hoặc hết hạn
 */
router.get("/veryfy", authController.veryfyToken);

module.exports =router;