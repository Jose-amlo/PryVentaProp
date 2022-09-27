module.exports = (sequelize, Sequelize) => {
    const Propiedad = sequelize.define("propiedad", {
      id_propiedad: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      region: {
        type: Sequelize.STRING
      },
      comuna: {
        type: Sequelize.STRING
      },
      calle: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.INTEGER
      }
    });
    return Propiedad;
  };
