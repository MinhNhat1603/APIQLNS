const timeSheetController = require("../controller/timeSheetController");
const authController = require("../controller/authController");
const router = require("express").Router();

/**
 * @swagger
 * tags:
 *   name: TimeSheet
 *   description: API quản lý chấm công
 */

/**
 * @swagger
 * /timeSheet/checkIn/{id}:
 *   post:
 *     summary: Nhân viên check-in
 *     tags: [TimeSheet]
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
 *         description: Check-in thành công
 */
router.post("/checkIn/:id", authController.veryfyEmploy, timeSheetController.fakecheckeIn);

/**
 * @swagger
 * /timeSheet/checkOut/{id}:
 *   put:
 *     summary: Nhân viên check-out
 *     tags: [TimeSheet]
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
 *         description: Check-out thành công
 */
router.put("/checkOut/:id", authController.veryfyEmploy, timeSheetController.checkOut);

/**
 * @swagger
 * /timeSheet/update:
 *   put:
 *     summary: Cập nhật thông tin chấm công
 *     tags: [TimeSheet]
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put("/update", timeSheetController.updateTimeSheet);

/**
 * @swagger
 * /timeSheet/getA:
 *   get:
 *     summary: Lấy thông tin một bản ghi chấm công
 *     tags: [TimeSheet]
 *     responses:
 *       200:
 *         description: Thông tin bản ghi
 */
router.get("/getA", timeSheetController.getAtimeSheet);

/**
 * @swagger
 * /timeSheet/timeSheetInMonth:
 *   get:
 *     summary: Lấy danh sách chấm công trong tháng
 *     tags: [TimeSheet]
 *     responses:
 *       200:
 *         description: Danh sách chấm công
 */
router.get("/timeSheetInMonth", timeSheetController.getTimeSheetInMonth);

/**
 * @swagger
 * /timeSheet/add:
 *   post:
 *     summary: Thêm bản ghi chấm công
 *     tags: [TimeSheet]
 *     responses:
 *       201:
 *         description: Thêm thành công
 */
router.post("/add", timeSheetController.getAtimeSheet);

/**
 * @swagger
 * /timeSheet/delete:
 *   delete:
 *     summary: Xóa bản ghi chấm công
 *     tags: [TimeSheet]
 *     responses:
 *       200:
 *         description: Xóa thành công
 */
router.delete("/delete", timeSheetController.getAtimeSheet);

module.exports = router;
