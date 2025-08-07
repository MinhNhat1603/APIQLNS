/**
 * @swagger
 * tags:
 *   name: Advance Request
 *   description: Quản lý các đơn xin ứng tiền
 */

const advanceRqController = require("../controller/advanceRqController");
const authController = require("../controller/authController")
const router =require("express").Router();

/**
 * @swagger
 * /advance:
 *   post:
 *     summary: Tạo đơn xin ứng tiền mới
 *     tags: [Advance Request]
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
 *               - year
 *               - month
 *               - reason
 *               - money
 *             properties:
 *               employee:
 *                 type: string
 *                 description: Mã nhân viên
 *                 example: "HDCK01"
 *               year:
 *                 type: integer
 *                 description: Năm ứng tiền
 *                 example: 2024
 *               month:
 *                 type: integer
 *                 description: Tháng ứng tiền
 *                 example: 8
 *               reason:
 *                 type: string
 *                 description: Lý do ứng tiền
 *                 example: "Việc riêng"
 *               money:
 *                 type: number
 *                 description: Số tiền cần ứng
 *                 example: 1500000
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
router.post("/", authController.veryfyEmploy, advanceRqController.addAdvanceRq);
 

/**
 * @swagger
 * /advance:
 *   get:
 *     summary: Lấy tất cả đơn xin ứng tiền
 *     tags: [Advance Request]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy danh sách thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "6698059e0e66690b69520371"
 *                   employee:
 *                     type: string
 *                     example: "HDCK01"
 *                   year:
 *                     type: integer
 *                     example: 2024
 *                   month:
 *                     type: integer
 *                     example: 7
 *                   money:
 *                     type: number
 *                     example: 3000000
 *                   reason:
 *                     type: string
 *                     example: "Việc riêng"
 *                   status:
 *                     type: string
 *                     example: "Chờ duyệt"
 *                   approvedUser:
 *                     type: string
 *                     example: ""
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-07-17T17:55:42.503Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-07-17T17:55:42.503Z"
 *                   __v:
 *                     type: integer
 *                     example: 0
 */
router.get("/", authController.veryfyAdmin, advanceRqController.getAllAdvanceRq);


/**
 * @swagger
 * /advance/{id}:
 *   get:
 *     summary: Lấy thông tin một đơn ứng tiền
 *     tags: [Advance Request]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của đơn ứng tiền
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 */
router.get("/:id", authController.veryfyEmploy, advanceRqController.getAdvanceRq);

/**
 * @swagger
 * /advance/{id}:
 *   put:
 *     summary: Cập nhật đơn ứng tiền
 *     tags: [Advance Request]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID đơn cần cập nhật
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put("/:id", authController.veryfyEmploy, advanceRqController.updateAdvanceRq);

/**
 * @swagger
 * /advance/employ/{id}:
 *   get:
 *     summary: Lấy các đơn ứng tiền của một nhân viên
 *     tags: [Advance Request]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID nhân viên
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 */
router.get("/employ/:id", authController.veryfyEmploy, advanceRqController.employHasAdvanceRq);

/**
 * @swagger
 * /advance/approval/{id}:
 *   put:
 *     summary: Xét duyệt đơn xin ứng tiền
 *     tags: [Advance Request]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID đơn cần xét duyệt
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Duyệt thành công
 */
router.put("/approval/:id", authController.veryfyAdmin, advanceRqController.approvalAdvanceRq);

module.exports = router;

