module.exports = (sequelize, Sequelize) => {
    const Cobertura = sequelize.define("cobertura", {
        Tipo_cobertura: {
            type: Sequelize.STRING,
            primaryKey: true
        }
    });
    return Cobertura;
};
