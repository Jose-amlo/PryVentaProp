module.exports = (sequelize, Sequelize) => {
  const Venta = sequelize.define("venta", {
    mes_venta: {
      type: Sequelize.STRING,
      primaryKey: false
    },
    monto_venta: {
      type: Sequelize.INTEGER
    }
  });
  return Venta;
};
