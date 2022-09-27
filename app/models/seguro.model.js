module.exports = (sequelize, Sequelize) => {
    const Seguro = sequelize.define("seguro", {
      id_seguro: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      aseguradora: {
        type: Sequelize.STRING
      }
    });
    return Seguro;
  };
