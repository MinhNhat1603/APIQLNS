const positonController = require("../controller/positionController");
const authController = require("../controller/authController");
const router = require("express").Router();

/**
 * @swagger
 * tags:
 *   name: Position
 *   description: API quản lý chức vụ
 */

/**
 * @swagger
 * /position:
 *   post:
 *     summary: Thêm chức vụ mới
 *     tags: [Position]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Thêm chức vụ thành công
 *       401:
 *         description: Không có quyền truy cập
 */
router.post("/", authController.veryfyAdmin, positonController.addPosition);

/**
 * @swagger
 * /position:
 *   get:
 *     summary: Lấy danh sách tất cả chức vụ
 *     tags: [Position]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Danh sách chức vụ
 */
router.get("/", authController.veryfyAdmin, positonController.getAllPosition);

/**
 * @swagger
 * /position/{id}:
 *   get:
 *     summary: Lấy thông tin một chức vụ
 *     tags: [Position]
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
 *         description: Thông tin chức vụ
 *       404:
 *         description: Không tìm thấy chức vụ
 */
router.get("/:id", authController.veryfyAdmin, positonController.getAPosition);

/**
 * @swagger
 * /position/{id}:
 *   put:
 *     summary: Cập nhật thông tin chức vụ
 *     tags: [Position]
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
 *         description: Không tìm thấy chức vụ
 */
router.put("/:id", authController.veryfyAdmin, positonController.updateUser);

/**
 * @swagger
 * /position/employ/{id}:
 *   put:
 *     summary: Lấy danh sách nhân viên thuộc chức vụ
 *     tags: [Position]
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
 *         description: Danh sách nhân viên
 *       404:
 *         description: Không tìm thấy chức vụ
 */
router.put("/employ/:id", authController.veryfyAdmin, positonController.employOf);

/**
 * @swagger
 * /position/countEmploy/{id}:
 *   put:
 *     summary: Lấy số lượng nhân viên thuộc chức vụ
 *     tags: [Position]
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
 *         description: Số lượng nhân viên
 *       404:
 *         description: Không tìm thấy chức vụ
 */
router.put("/countEmploy/:id", authController.veryfyAdmin, positonController.countEmployOf);

module.exports = router;
