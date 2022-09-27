module.exports = (sequelize, Sequelize) => {
    const Administrador = sequelize.define("administrador", {
      rut_admin: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      correo_admin: {
        type: Sequelize.STRING
      },
      telefono_Admin: {
        type: Sequelize.INTEGER
      }
    });
    return Administrador;
  };
