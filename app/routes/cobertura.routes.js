module.exports = app => {
    const cobertura = require("../controllers/cobertura.controller.js");
    var router = require("express").Router();
    // Crear un cobertura
    router.post("/", cobertura.create);
    // buscar cobertura (con condición)
    router.get("/", cobertura.findAll);
    // buscar cobertura con id
    router.get("/:id", cobertura.findOne);
    // actualizar cobertura
    router.put("/:id", cobertura.update);
    // eliminar cobertura con id
    router.delete("/:id", cobertura.delete);
    // eliminar todos los cobertura
    router.delete("/", cobertura.deleteAll);
    // agregar rutas al servidor
    app.use('/api/cobertura', router);    
 };
