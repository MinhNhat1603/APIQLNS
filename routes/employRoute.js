const employController = require("../controller/employController");
const authController = require("../controller/authController");
const router = require("express").Router();

/**
 * @swagger
 * tags:
 *   name: Employ
 *   description: API quản lý nhân viên
 */

/**
 * @swagger
 * /employ:
 *   post:
 *     summary: Thêm mới nhân viên
 *     tags: [Employ]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Tạo nhân viên thành công
 *       401:
 *         description: Không có quyền truy cập
 */
router.post("/", authController.veryfyAdmin, employController.addEmploy);

/**
 * @swagger
 * /employ:
 *   get:
 *     summary: Lấy danh sách tất cả nhân viên
 *     tags: [Employ]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Danh sách nhân viên
 *       401:
 *         description: Không có quyền truy cập
 */
router.get("/", authController.veryfyAdmin, employController.getAllEmploy);

/**
 * @swagger
 * /employ/{id}:
 *   get:
 *     summary: Lấy thông tin chi tiết một nhân viên
 *     tags: [Employ]
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
 *         description: Thông tin nhân viên
 *       404:
 *         description: Không tìm thấy nhân viên
 */
router.get("/:id", authController.veryfyEmploy, employController.getAEmploy);

/**
 * @swagger
 * /employ/{id}:
 *   put:
 *     summary: Cập nhật thông tin một nhân viên
 *     tags: [Employ]
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
 *         description: Không tìm thấy nhân viên
 */
router.put("/:id", authController.veryfyEmploy, employController.updateEmploy);

/**
 * @swagger
 * /employ/acheieved/{id}:
 *   put:
 *     summary: Đánh dấu nhân viên đạt yêu cầu sau thử việc
 *     tags: [Employ]
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
 *         description: Đã cập nhật trạng thái nhân viên
 *       404:
 *         description: Không tìm thấy nhân viên
 */
router.put("/acheieved/:id", authController.veryfyAdmin, employController.employAcheieved);

/**
 * @swagger
 * /employ/notAcheieved/{id}:
 *   put:
 *     summary: Đánh dấu nhân viên không đạt yêu cầu sau thử việc
 *     tags: [Employ]
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
 *         description: Đã cập nhật trạng thái nhân viên
 *       404:
 *         description: Không tìm thấy nhân viên
 */
router.put("/notAcheieved/:id", authController.veryfyAdmin, employController.employNotAchieved);

/**
 * @swagger
 * /employ/json:
 *   post:
 *     summary: Thêm danh sách nhân viên từ file JSON
 *     tags: [Employ]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Đã thêm danh sách nhân viên
 *       400:
 *         description: Dữ liệu không hợp lệ
 */
router.post("/json", authController.veryfyAdmin, employController.excelAddNewEmploy);

// /**
//  * @swagger
//  * /employ/trial:
//  *   get:
//  *     summary: Lấy danh sách nhân viên đang thử việc
//  *     tags: [Employ]
//  *     security:
//  *       - bearerAuth: []
//  *     responses:
//  *       200:
//  *         description: Danh sách nhân viên thử việc
//  */
// router.get("/trial", authController.veryfyAdmin, employController.trialEmploy);

module.exports = router;
