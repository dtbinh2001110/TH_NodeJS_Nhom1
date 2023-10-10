'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //them du lieu vao//
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('list_users', [{
      Username:'admin',
      FullName:'nguyenvana',
      email: 'admin@gmail.com',
      Sodienthoai:'0123456789',
      Address:'122/1 Can Tho',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
