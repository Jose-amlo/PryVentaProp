// Importe de dependencias
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
// Inicialización de Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// Importa modelos a Sequelize
db.usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.administrador = require("./administrador.model.js")(sequelize, Sequelize);
db.cobertura = require("./cobertura.model.js")(sequelize, Sequelize);
db.propiedad = require("./propiedad.model.js")(sequelize, Sequelize);
db.seguro = require("./seguro.model.js")(sequelize, Sequelize);
db.venta = require("./venta.model.js")(sequelize, Sequelize);

db.usuario.hasMany(db.venta, {
  foreignkey: {
    name: "nombre_usuario", type: Sequelize.STRING, allowNull: false
  },
  onDelete: "CASCADE", onUpdate: "CASCADE"
});
db.venta.belongsTo(db.usuario, {
  foreignkey: {
    name: ""
  }
});

db.usuario.hasMany(db.propiedad);
db.propiedad.belongsTo(db.usuario);

db.propiedad.belongsTo(db.seguro);
db.seguro.hasOne(db.propiedad);

db.administrador.hasMany(db.propiedad);
db.propiedad.belongsTo(db.administrador);

db.seguro.hasMany(db.cobertura);
db.cobertura.belongsTo(db.seguro);
module.exports = db;
