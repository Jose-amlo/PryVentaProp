module.exports = app => {
    const propiedad = require("../controllers/propiedad.controller.js");
    var router = require("express").Router();
    // Crear un propiedad
    router.post("/", propiedad.create);
    // buscar propiedad (con condición)
    router.get("/", propiedad.findAll);
    // buscar propiedad con id
    router.get("/:id_propiedad", propiedad.findOne);
    // actualizar propiedad
    router.put("/:id_propiedad", propiedad.update);
    // eliminar propiedad con id
    router.delete("/:id_propiedad", propiedad.delete);
    // eliminar todos las propiedades
    router.delete("/", propiedad.deleteAll);
    // agregar rutas al servidor
    app.use('/api/propiedad', router);    
 };
