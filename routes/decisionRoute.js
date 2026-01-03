const decisionController = require("../controller/decisionController");
const authController = require("../controller/authController");
const router = require("express").Router();

/**
 * @swagger
 * tags:
 *   name: Decision
 *   description: API quản lý quyết định
 */

/**
 * @swagger
 * /decision:
 *   post:
 *     summary: Thêm mới một quyết định
 *     tags: [Decision]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Tạo quyết định thành công
 *       401:
 *         description: Không có quyền truy cập
 */
router.post("/", authController.veryfyAdmin, decisionController.addDecision);

/**
 * @swagger
 * /decision:
 *   get:
 *     summary: Lấy danh sách tất cả quyết định
 *     tags: [Decision]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Danh sách quyết định
 *       401:
 *         description: Không có quyền truy cập
 */
router.get("/", authController.veryfyAdmin, decisionController.getAllDecision);

/**
 * @swagger
 * /decision/{id}:
 *   get:
 *     summary: Lấy thông tin chi tiết một quyết định
 *     tags: [Decision]
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
 *         description: Thông tin quyết định
 *       404:
 *         description: Không tìm thấy quyết định
 */
router.get("/:id", authController.veryfyEmploy, decisionController.getADecision);

/**
 * @swagger
 * /decision/{id}:
 *   put:
 *     summary: Cập nhật thông tin một quyết định
 *     tags: [Decision]
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
 *       404:
 *         description: Không tìm thấy quyết định
 */
router.put("/:id", authController.veryfyAdmin, decisionController.updateDecision);

/**
 * @swagger
 * /decision/employ/{id}:
 *   get:
 *     summary: Lấy danh sách quyết định của một nhân viên
 *     tags: [Decision]
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
 *         description: Danh sách quyết định của nhân viên
 *       404:
 *         description: Không tìm thấy nhân viên hoặc quyết định
 */
router.get("/employ/:id", authController.veryfyEmploy, decisionController.employHasDecision);

module.exports = router;
