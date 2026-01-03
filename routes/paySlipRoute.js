const paySlipController = require("../controller/paySlipController");
const authController = require("../controller/authController");
const router = require("express").Router();

/**
 * @swagger
 * tags:
 *   name: PaySlip
 *   description: API quản lý bảng lương
 */

/**
 * @swagger
 * /paySlip/{id}:
 *   post:
 *     summary: Tạo bảng lương cho một chi nhánh
 *     tags: [PaySlip]
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
 *         description: Tạo bảng lương thành công
 *       401:
 *         description: Không có quyền truy cập
 */
router.post("/:id", authController.veryfyAdmin, paySlipController.calculationPaySlip);

/**
 * @swagger
 * /paySlip/employ/{id}:
 *   post:
 *     summary: Tạo bảng lương cho một nhân viên
 *     tags: [PaySlip]
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
 *         description: Tạo bảng lương cho nhân viên thành công
 *       401:
 *         description: Không có quyền truy cập
 */
router.post("/employ/:id", authController.veryfyAdmin, paySlipController.calculationAPaySlip);

/**
 * @swagger
 * /paySlip/accountantCheck:
 *   put:
 *     summary: Kế toán kiểm tra và duyệt bảng lương
 *     tags: [PaySlip]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Đã duyệt bởi kế toán
 *       401:
 *         description: Không có quyền truy cập
 */
router.put("/accountantCheck", authController.veryfyAdmin, paySlipController.accountantCheck);

/**
 * @swagger
 * /paySlip/directorCheck:
 *   put:
 *     summary: Giám đốc kiểm tra và duyệt bảng lương
 *     tags: [PaySlip]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Đã duyệt bởi giám đốc
 *       401:
 *         description: Không có quyền truy cập
 */
router.put("/directorCheck", authController.veryfyAdmin, paySlipController.directorCheck);

/**
 * @swagger
 * /paySlip/{id}:
 *   get:
 *     summary: Xem thông tin một bảng lương
 *     tags: [PaySlip]
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
 *         description: Thông tin bảng lương
 *       404:
 *         description: Không tìm thấy bảng lương
 */
router.get("/:id", authController.veryfyEmploy, paySlipController.getApaySlip);

/**
 * @swagger
 * /paySlip/employ/{id}:
 *   get:
 *     summary: Lấy danh sách bảng lương của một nhân viên
 *     tags: [PaySlip]
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
 *         description: Danh sách bảng lương của nhân viên
 *       404:
 *         description: Không tìm thấy nhân viên hoặc bảng lương
 */
router.get("/employ/:id", authController.veryfyEmploy, paySlipController.employHasPaySlip);

/**
 * @swagger
 * /paySlip:
 *   get:
 *     summary: Tải danh sách bảng lương dưới dạng Excel
 *     tags: [PaySlip]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: File Excel bảng lương
 *       401:
 *         description: Không có quyền truy cập
 */
router.get("/", authController.veryfyAdmin, paySlipController.dowloadExcelPaySlip);

module.exports = router;
