const departmentController = require("../controller/departmentController");
const authController = require("../controller/authController");
const router = require("express").Router();

/**
 * @swagger
 * tags:
 *   name: Department
 *   description: API quản lý phòng ban
 */

/**
 * @swagger
 * /department:
 *   post:
 *     summary: Thêm mới phòng ban
 *     tags: [Department]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Tạo phòng ban thành công
 *       401:
 *         description: Không có quyền truy cập
 */
router.post("/", authController.veryfyAdmin, departmentController.add);

/**
 * @swagger
 * /department/branch/{id}:
 *   get:
 *     summary: Lấy danh sách tất cả phòng ban thuộc một chi nhánh
 *     tags: [Department]
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
 *         description: Danh sách phòng ban
 *       401:
 *         description: Không có quyền truy cập
 */
router.get("/branch/:id", authController.veryfyAdmin, departmentController.getAll);

/**
 * @swagger
 * /department/{id}:
 *   get:
 *     summary: Lấy thông tin chi tiết một phòng ban
 *     tags: [Department]
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
 *         description: Thông tin phòng ban
 *       404:
 *         description: Không tìm thấy phòng ban
 */
router.get("/:id", authController.veryfyAdmin, departmentController.getOne);

/**
 * @swagger
 * /department/{id}:
 *   put:
 *     summary: Cập nhật thông tin phòng ban
 *     tags: [Department]
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
 *         description: Không tìm thấy phòng ban
 */
router.put("/:id", authController.veryfyAdmin, departmentController.update);

/**
 * @swagger
 * /department/countEmploy/{id}:
 *   get:
 *     summary: Lấy số lượng nhân viên trong phòng ban
 *     tags: [Department]
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
 *         description: Trả về số lượng nhân viên
 *       404:
 *         description: Không tìm thấy phòng ban
 */
router.get("/countEmploy/:id", authController.veryfyAdmin, departmentController.countEmployIn);

/**
 * @swagger
 * /department/employ/{id}:
 *   get:
 *     summary: Lấy danh sách nhân viên trong phòng ban
 *     tags: [Department]
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
 *         description: Không tìm thấy phòng ban
 */
router.get("/employ/:id", authController.veryfyAdmin, departmentController.employIn);

module.exports = router;
