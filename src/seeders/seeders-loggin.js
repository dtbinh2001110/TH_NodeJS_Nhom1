'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //them du lieu vao//
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('logins', [{
        // Username: DataTypes.STRING,
        // Password: DataTypes.STRING,
        // Status: DataTypes.BOOLEAN,
      Username:'admin1',
      Password:'admin1',
      Status:'',
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
