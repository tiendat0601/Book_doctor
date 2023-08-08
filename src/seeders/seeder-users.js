'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@example.com',
      password: '123456',
      firstName: 'HoidanIT',
      lastName: 'Eric',
      address: 'USA',
      phoneNumber: '091456789',
      gender: 1,
      image: 'Hinh1',
      roleId: 'Admin',
      positionId: '123',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
