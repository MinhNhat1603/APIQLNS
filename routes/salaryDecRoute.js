const salaryDecController = require("../controller/salaryDecController");
const authController = require("../controller/authController");
const router = require("express").Router();

/**
 * @swagger
 * tags:
 *   name: SalaryDecision
 *   description: API quản lý quyết định tăng/giảm lương
 */

/**
 * @swagger
 * /salaryDec:
 *   post:
 *     summary: Thêm quyết định tăng/giảm lương
 *     tags: [SalaryDecision]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Thêm thành công
 *       401:
 *         description: Không có quyền truy cập
 */
router.post("/", authController.veryfyAdmin, salaryDecController.addSalaryDec);

/**
 * @swagger
 * /salaryDec/getAll:
 *   get:
 *     summary: Lấy danh sách tất cả quyết định tăng/giảm lương
 *     tags: [SalaryDecision]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Danh sách quyết định
 */
router.get("/getAll", authController.veryfyAdmin, salaryDecController.getAllSalaryDec);

/**
 * @swagger
 * /salaryDec/{id}:
 *   get:
 *     summary: Lấy thông tin quyết định tăng/giảm lương theo ID
 *     tags: [SalaryDecision]
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
 *         description: Không tìm thấy
 */
router.get("/:id", authController.veryfyEmploy, salaryDecController.getASalaryDec);

/**
 * @swagger
 * /salaryDec/{id}:
 *   put:
 *     summary: Cập nhật quyết định tăng/giảm lương
 *     tags: [SalaryDecision]
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
 *         description: Không tìm thấy
 */
router.put("/:id", authController.veryfyAdmin, salaryDecController.updateSalaryDec);

/**
 * @swagger
 * /salaryDec/employ/{id}:
 *   get:
 *     summary: Lấy danh sách quyết định tăng/giảm lương của một nhân viên
 *     tags: [SalaryDecision]
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
 *         description: Danh sách quyết định
 */
router.get("/employ/:id", authController.veryfyEmploy, salaryDecController.employHasSalaryDec);

/**
 * @swagger
 * /salaryDec:
 *   get:
 *     summary: Tải mẫu phụ lục tăng lương
 *     tags: [SalaryDecision]
 *     responses:
 *       200:
 *         description: File mẫu
 */
router.get("/", salaryDecController.dowloadContractAddendum);

/**
 * @swagger
 * /salaryDec/check/{id}:
 *   put:
 *     summary: Đánh giá tiêu chí tăng lương
 *     tags: [SalaryDecision]
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
 *         description: Đã đánh giá
 */
router.put("/check/:id", authController.veryfyAdmin, salaryDecController.checkSalaryDec);

/**
 * @swagger
 * /salaryDec/director/{id}:
 *   put:
 *     summary: Giám đốc duyệt quyết định
 *     tags: [SalaryDecision]
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
 *         description: Đã duyệt
 */
router.put("/director/:id", authController.veryfyAdmin, salaryDecController.directorCheck);

module.exports = router;
