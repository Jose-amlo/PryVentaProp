module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
      nombre_usuario: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      fecha_nacimiento: {
        type: Sequelize.DATE
      },
      correo: {
        type: Sequelize.STRING
      },
      telefono_usuario: {
        type: Sequelize.INTEGER
      }
    });
    return Usuario;
  };
