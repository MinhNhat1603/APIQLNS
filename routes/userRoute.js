const userController = require("../controller/userController");
const authController = require("../controller/authController");
const router = require("express").Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API quản lý người dùng
 */

/**
 * @swagger
 * /user/{id}:
 *   post:
 *     summary: Thêm người dùng mới
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Tạo mới thành công
 */
router.post("/:id", authController.veryfyAdmin, userController.addUser);

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Lấy danh sách tất cả người dùng
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Danh sách người dùng
 */
router.get("/", authController.veryfyAdmin, userController.getAllUser);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Lấy thông tin một người dùng
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thông tin người dùng
 */
router.get("/:id", authController.veryfyAdmin, userController.getAUser);

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Cập nhật thông tin người dùng
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put("/:id", authController.veryfyAdmin, userController.updateUser);

/**
 * @swagger
 * /user/password/{id}:
 *   put:
 *     summary: Thay đổi mật khẩu
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Đổi mật khẩu thành công
 */
router.put("/password/:id", authController.veryfyEmploy, userController.changePassword);

module.exports = router;
