module.exports = (sequelize, Sequelize) => {
    const Administrador = sequelize.define("venta", {
      rut_admin: {
        type: Sequelize.INT,
        primaryKey: true
      },
      correo_admin: {
        type: Sequelize.STRING
      },
      telefono_Admin: {
        type: Sequelize.INT
      }
    });
    return Administrador;
  };
