/**
 * @swagger
 * tags:
 *   name: Branch
 *   description: Quản lý chi nhánh và nhân sự theo chi nhánh
 */

const branchController = require("../controller/branchController");
const authController = require("../controller/authController");
const router = require("express").Router();

/**
 * @swagger
 * /api/branch:
 *   post:
 *     summary: Tạo chi nhánh mới
 *     tags: [Branch]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idBranch
 *               - name
 *               - location
 *               - date
 *               - status
 *             properties:
 *               idBranch:
 *                 type: string
 *                 example: HCM02
 *               name:
 *                 type: string
 *                 example: Chi nhánh 2 thành phố HCM
 *               location:
 *                 type: string
 *                 example: 01 Võ Văn Ngân, Thủ Đức, TP.Hồ Chí Minh
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 01/01/2020
 *               status:
 *                 type: string
 *                 example: Sắp hoạt động
 *     responses:
 *       201:
 *         description: Tạo chi nhánh thành công
 *       400:
 *         description: Lỗi dữ liệu đầu vào hoặc quyền truy cập
 */
router.post("/", authController.veryfyAdmin, branchController.addBranch);


/**
 * @swagger
 * /api/branch:
 *   get:
 *     summary: Lấy danh sách tất cả chi nhánh
 *     tags: [Branch]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Danh sách chi nhánh
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "66918aa34410960db298afc6"
 *                   idBranch:
 *                     type: string
 *                     example: "Bee-Next"
 *                   name:
 *                     type: string
 *                     example: "Công ty Cổ phần TM-DV Vùng Trời Thông Tin"
 *                   location:
 *                     type: string
 *                     example: "44 Đường số 10, KĐTM Him Lam, P. Tân Hưng, Quận 7, TP. Hồ Chí Minh"
 *                   date:
 *                     type: string
 *                     example: "23/08/2006"
 *                   status:
 *                     type: string
 *                     example: "Đang hoạt động"
 *                   departments:
 *                     type: array
 *                     items:
 *                       type: string
 *                       example: "HR"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-07-12T19:57:23.111Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-07-16T16:10:00.340Z"
 *                   __v:
 *                     type: integer
 *                     example: 0
 *       401:
 *         description: Không có quyền truy cập
 */
router.get("/", authController.veryfyAdmin, branchController.getAllBranch);

/**
 * @swagger
 * /api/branch/{id}:
 *   get:
 *     summary: Lấy thông tin chi nhánh theo ID
 *     tags: [Branch]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID MongoDB của chi nhánh
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Trả về thông tin chi nhánh
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "66918aa34410960db298afc6"
 *                 idBranch:
 *                   type: string
 *                   example: "Bee-Next"
 *                 name:
 *                   type: string
 *                   example: "Công ty Cổ phần TM-DV Vùng Trời Thông Tin"
 *                 location:
 *                   type: string
 *                   example: "44 Đường số 10, KĐTM Him Lam, P. Tân Hưng, Quận 7, TP. Hồ Chí Minh"
 *                 date:
 *                   type: string
 *                   example: "23/08/2006"
 *                 status:
 *                   type: string
 *                   example: "Đang hoạt động"
 *                 departments:
 *                   type: array
 *                   items:
 *                     type: string
 *                     example: "HR"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-07-12T19:57:23.111Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-07-16T16:10:00.340Z"
 *                 __v:
 *                   type: integer
 *                   example: 0
 *       404:
 *         description: Không tìm thấy chi nhánh
 */
router.get("/:id", authController.veryfyAdmin, branchController.getABranch);

/**
 * @swagger
 * /branch/{id}:
 *   put:
 *     summary: Cập nhật thông tin chi nhánh
 *     tags: [Branch]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID chi nhánh cần cập nhật
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Chi nhánh Đà Nẵng"
 *               address:
 *                 type: string
 *                 example: "24 Bạch Đằng, Hải Châu, Đà Nẵng"
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put("/:id", authController.veryfyAdmin, branchController.updateBranch);

/**
 * @swagger
 * /branch/countEmploy/{id}:
 *   get:
 *     summary: Đếm số lượng nhân viên thuộc chi nhánh
 *     tags: [Branch]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID chi nhánh
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Số lượng nhân viên trong chi nhánh
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 branchId:
 *                   type: string
 *                   example: "6610a9a90abc1234567890ff"
 *                 count:
 *                   type: integer
 *                   example: 12
 */
router.get("/countEmploy/:id", authController.veryfyAdmin, branchController.countEmployIn);

/**
 * @swagger
 * /branch/employ/{id}:
 *   get:
 *     summary: Lấy danh sách nhân viên trong chi nhánh
 *     tags: [Branch]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID chi nhánh
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Danh sách nhân viên
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "660b827b15dc4765a88fee1a"
 *                   userName:
 *                     type: string
 *                     example: "nguyenvana"
 *                   position:
 *                     type: string
 *                     example: "Kế toán"
 *                   branch:
 *                     type: string
 *                     example: "6610a9a90abc1234567890ff"
 */
router.get("/employ/:id", authController.veryfyAdmin, branchController.employIn);

module.exports = router;
