module.exports = (sequelize, Sequelize) => {
    const Venta = sequelize.define("venta", {
      mes_venta: {
        type: Sequelize.ENUM,
        primaryKey: false
      },
      monto_venta: {
        type: Sequelize.INT
      }
    });
    return Venta;
  };
