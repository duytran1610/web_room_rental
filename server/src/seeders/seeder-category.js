'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [{
      code: 'CTCH',
      value: 'Cho thuê căn hộ',
      header: 'Cho Thuê Căn Hộ Chung Cư, Giá Rẻ, Mới Nhất 2023',
      subheader: 'Cho thuê căn hộ - Kênh đăng tin cho thuê căn hộ số 1: giá rẻ, chính chủ, đầy đủ tiện nghi. Cho thuê chung cư với nhiều mức giá, diện tích cho thuê khác nhau.',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: 'CTMB',
      value: 'Cho thuê mặt bằng',
      header: 'Cho Thuê Mặt Bằng, Cửa Hàng + Kiot Giá Rẻ, Mới Nhất 2023',
      subheader: 'Cho thuê mặt bằng - Kênh thông tin mặt bằng giá rẻ, cửa hàng, kiot số 1 Việt Nam. Tìm mặt bằng kinh doanh, buôn bán nhỏ, gần chợ tất cả có tại web phongtro123.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: 'CTPT',
      value: 'Cho thuê phòng trọ',
      header: 'Cho Thuê Phòng Trọ, Giá Rẻ, Tiện Nghi, Mới Nhất 2023',
      subheader: 'Cho thuê phòng trọ - Kênh thông tin số 1 về phòng trọ giá rẻ, phòng trọ sinh viên, phòng trọ cao cấp mới nhất năm 2023. Tất cả nhà trọ cho thuê giá tốt nhất tại Việt Nam.',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: 'NCT',
      value: 'Nhà cho thuê',
      header: 'Cho Thuê Nhà Nguyên Căn, Giá Rẻ, Chính Chủ, Mới Nhất 2023',
      subheader: 'Cho thuê nhà nguyên căn - Kênh đăng tin cho thuê nhà số 1: giá rẻ, chính chủ, miễn trung gian, đầy đủ tiện nghi, mức giá, diện tích cho thuê khác nhau.',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
