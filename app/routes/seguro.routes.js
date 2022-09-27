module.exports = app => {
    const seguro = require("../controllers/seguro.controller.js");
    var router = require("express").Router();
    // Crear un seguro
    router.post("/", seguro.create);
    // buscar seguro (con condición)
    router.get("/", seguro.findAll);
    // buscar seguro con id
    router.get("/:id", seguro.findOne);
    // actualizar seguro
    router.put("/:id", seguro.update);
    // eliminar seguro con id
    router.delete("/:id", seguro.delete);
    // eliminar todos los seguro
    router.delete("/", seguro.deleteAll);
    // agregar rutas al servidor
    app.use('/api/seguro', router);    
 };
