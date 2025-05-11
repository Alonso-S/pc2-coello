"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Usuarios", [
      {
        nombre: "Administrador",
        email: "admin@farmacia.com",
        password: "123456", // ¡Reemplaza con hash real en producción!
        rol: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Juan Pérez",
        email: "juan@farmacia.com",
        password: "123456",
        rol: "usuario",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Usuarios", null, {});
  },
};
