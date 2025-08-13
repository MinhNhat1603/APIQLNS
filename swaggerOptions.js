// swaggerOptions.js
module.exports = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API QUẢN LÝ NHÂN SỰ VÀ CHẤM CÔNG',
      version: '1.0.0',
      description: 'Tài liệu API tự động với Swagger',
    },
    servers: [
      {
        url: 'http://localhost:5000', 
      },
    ],
  },
  apis: ['./routes/*.js'], 
};
