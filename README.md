# APIQLNS – Hệ thống Quản lý Nhân sự

Dự án xây dựng hệ thống **RESTful API** cho ứng dụng **Quản lý nhân sự **, hỗ trợ đầy đủ các chức năng từ quản lý thông tin nhân viên, chấm công, đến tính lương và phân quyền người dùng. Ứng dụng được xây dựng bằng **Node.js + Express**, sử dụng **MongoDB** làm cơ sở dữ liệu, xác thực bằng **JWT**, 

---

## 🔧 Công nghệ sử dụng

| Công nghệ      | Mục đích                         |
|----------------|----------------------------------|
| Node.js        | Nền tảng JavaScript backend      |
| Express.js     | Framework xây dựng RESTful API   |
| MongoDB        | Cơ sở dữ liệu NoSQL              |
| Mongoose       | ORM cho MongoDB                  |
| JWT            | Xác thực & phân quyền người dùng |


---

## ⚙️ Chức năng chính

- [x] Đăng ký / Đăng nhập / Đăng xuất
- [x] Xác thực người dùng bằng JWT
- [x] Phân quyền (Admin / Nhân viên)
- [x] Quản lý thông tin nhân viên
- [x] Chấm công (ghi nhận thời gian vào/ra)
- [x] Tính lương dựa trên công và hệ số

---

---

## 🚀 Cài đặt & Chạy dự án

```bash
# 1. Clone project
git clone https://github.com/MinhNhat1603/APIQLNS.git
cd APIQLNS

# 2. Cài đặt dependencies
npm install

# 3. Tạo file .env và cấu hình:
PORT=5000
MONGO_URI=mongodb://localhost:27017/qlns
JWT_SECRET=your_jwt_secret

# 4. Chạy server
npm start

# 5. Truy cập Swagger Docs
http://localhost:5000/api-docs


