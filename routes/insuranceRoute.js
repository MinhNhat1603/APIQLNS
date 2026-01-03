const insuranceController = require("../controller/isuranceController");
const authController = require("../controller/authController");
const router = require("express").Router();

/**
 * @swagger
 * tags:
 *   name: Insurance
 *   description: API quản lý bảo hiểm
 */

/**
 * @swagger
 * /insurance/{id}:
 *   post:
 *     summary: Thêm mới bảo hiểm cho nhân viên
 *     tags: [Insurance]
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
 *         description: Tạo bảo hiểm thành công
 *       401:
 *         description: Không có quyền truy cập
 */
router.post("/:id", authController.veryfyAdmin, insuranceController.addInsurance);

/**
 * @swagger
 * /insurance:
 *   get:
 *     summary: Lấy danh sách tất cả bảo hiểm
 *     tags: [Insurance]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Danh sách bảo hiểm
 *       401:
 *         description: Không có quyền truy cập
 */
router.get("/", authController.veryfyAdmin, insuranceController.getAllInsurance);

/**
 * @swagger
 * /insurance/inMonth:
 *   get:
 *     summary: Lấy danh sách bảo hiểm trong tháng hiện tại
 *     tags: [Insurance]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Danh sách bảo hiểm trong tháng
 *       401:
 *         description: Không có quyền truy cập
 */
router.get("/inMonth", authController.veryfyAdmin, insuranceController.getAllInsuranceInMonth);

/**
 * @swagger
 * /insurance/{id}:
 *   get:
 *     summary: Lấy thông tin chi tiết một bảo hiểm
 *     tags: [Insurance]
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
 *         description: Thông tin bảo hiểm
 *       404:
 *         description: Không tìm thấy bảo hiểm
 */
router.get("/:id", authController.veryfyEmploy, insuranceController.getAInsurance);

/**
 * @swagger
 * /insurance/{id}:
 *   put:
 *     summary: Cập nhật thông tin bảo hiểm
 *     tags: [Insurance]
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
 *         description: Không tìm thấy bảo hiểm
 */
router.put("/:id", authController.veryfyAdmin, insuranceController.updateInsurance);

/**
 * @swagger
 * /insurance/employ/{id}:
 *   get:
 *     summary: Lấy thông tin bảo hiểm của một nhân viên
 *     tags: [Insurance]
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
 *         description: Thông tin bảo hiểm của nhân viên
 *       404:
 *         description: Không tìm thấy nhân viên hoặc bảo hiểm
 */
router.get("/employ/:id", authController.veryfyEmploy, insuranceController.employHasInsuran);

module.exports = router;
