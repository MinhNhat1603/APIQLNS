const leaveRqController = require("../controller/leaveRqController");
const authController = require("../controller/authController");
const router = require("express").Router();

/**
 * @swagger
 * tags:
 *   name: LeaveRequest
 *   description: API quản lý đơn xin nghỉ
 */

/**
 * @swagger
 * /leaveRq:
 *   post:
 *     summary: Tạo mới đơn xin nghỉ
 *     tags: [LeaveRequest]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Tạo đơn thành công
 *       401:
 *         description: Không có quyền truy cập
 */
router.post("/", authController.veryfyEmploy, leaveRqController.addLeaveRq);

/**
 * @swagger
 * /leaveRq:
 *   get:
 *     summary: Lấy danh sách tất cả đơn xin nghỉ
 *     tags: [LeaveRequest]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Danh sách đơn xin nghỉ
 *       401:
 *         description: Không có quyền truy cập
 */
router.get("/", authController.veryfyAdmin, leaveRqController.getAllLeaveRq);

/**
 * @swagger
 * /leaveRq/{id}:
 *   get:
 *     summary: Lấy thông tin chi tiết đơn xin nghỉ
 *     tags: [LeaveRequest]
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
 *         description: Thông tin đơn xin nghỉ
 *       404:
 *         description: Không tìm thấy đơn xin nghỉ
 */
router.get("/:id", authController.veryfyEmploy, leaveRqController.getALeaveRq);

/**
 * @swagger
 * /leaveRq/{id}:
 *   put:
 *     summary: Cập nhật thông tin đơn xin nghỉ
 *     tags: [LeaveRequest]
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
 *         description: Không tìm thấy đơn xin nghỉ
 */
router.put("/:id", authController.veryfyEmploy, leaveRqController.updateLeaveRq);

/**
 * @swagger
 * /leaveRq/employ/{id}:
 *   get:
 *     summary: Lấy danh sách đơn xin nghỉ của một nhân viên
 *     tags: [LeaveRequest]
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
 *         description: Danh sách đơn xin nghỉ của nhân viên
 *       404:
 *         description: Không tìm thấy nhân viên hoặc đơn xin nghỉ
 */
router.get("/employ/:id", authController.veryfyEmploy, leaveRqController.employHasLeaveRq);

module.exports = router;
