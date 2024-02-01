const { Sequelize } = require('sequelize');
require('dotenv').config();

// Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false
    //   }
    // },
    pool: {
        max: 5,                   // Số lượng kết nối tối đa
        min: 0,                   // Số lượng kết nối tối thiểu
        acquire: 3000,            // Thời gian chờ tối đa (milliseconds)
        idle: 10000                // Thời gian giữ kết nối (milliseconds)
    }
});


const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection DB has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export default connectDB;