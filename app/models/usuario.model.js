module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuarios", {
        nombre_usuario: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        fecha_nacimiento: {
            type: Sequelize.DATEONLY 
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
