/**
 * @swagger
 * tags:
 *   name: Contract
 *   description: Quản lý các hợp đồng
 */
const contractController = require("../controller/contractController");
const authController = require("../controller/authController")
const router =require("express").Router();

/**
 * @swagger
 * /contract:
 *   post:
 *     summary: Tạo hợp đồng mới
 *     tags: [Contract]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - employee
 *               - idContract
 *               - contractType
 *               - signDate
 *               - startDate
 *               - endDate
 *               - position
 *               - department
 *               - basicSalary
 *               - travelAllowance
 *               - eatingAllowance
 *             properties:
 *               employee:
 *                 type: string
 *                 example: "HDCK01"
 *               idContract:
 *                 type: string
 *                 example: "HDLD-03_13-05-2023"
 *               contractType:
 *                 type: string
 *                 example: "Hop dong 3 nam"
 *               signDate:
 *                 type: string
 *                 format: date
 *                 example: "13/05/2023"
 *               startDate:
 *                 type: string
 *                 format: date
 *                 example: "14/05/2023"
 *               endDate:
 *                 type: string
 *                 format: date
 *                 example: "30/04/2026"
 *               position:
 *                 type: string
 *                 example: "TPPT"
 *               department:
 *                 type: string
 *                 example: "HR01"
 *               basicSalary:
 *                 type: number
 *                 example: 18000000
 *               travelAllowance:
 *                 type: number
 *                 example: 500000
 *               eatingAllowance:
 *                 type: number
 *                 example: 400000
 *     responses:
 *       201:
 *         description: Tạo hợp đồng thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Tạo hợp đồng thành công"
 *                 data:
 *                   type: object
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       401:
 *         description: Không có quyền truy cập
 */

router.post ("/", authController.veryfyAdmin, contractController.addContract);

/**
 * @swagger
 * /contract:
 *   get:
 *     summary: Lấy tất cả hợp đồng
 *     tags: [Contract]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Trả về danh sách hợp đồng
 */
router.get("/", authController.veryfyAdmin, contractController.getAllContract);

/**
 * @swagger
 * /contract/{id}:
 *   get:
 *     summary: Lấy thông tin một hợp đồng
 *     tags: [Contract]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID hợp đồng
 *     responses:
 *       200:
 *         description: Trả về thông tin hợp đồng
 */
router.get("/:id", authController.veryfyEmploy, contractController.getAContract);

/**
 * @swagger
 * /contract/{id}:
 *   put:
 *     summary: Cập nhật hợp đồng
 *     tags: [Contract]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID hợp đồng
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               position: "TPKT"
 *               department: "KT01"
 *               basicSalary: 20000000
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put("/:id", authController.veryfyAdmin, contractController.updateContract);

/**
 * @swagger
 * /contract/employ/{id}:
 *   get:
 *     summary: Lấy danh sách hợp đồng của một nhân viên
 *     tags: [Contract]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Mã nhân viên
 *     responses:
 *       200:
 *         description: Danh sách hợp đồng nhân viên
 */
router.get("/employ/:id", authController.veryfyEmploy, contractController.employHasContract);


module.exports =router;