module.exports = app => {
    const administrador = require("../controllers/administrador.controller.js");
    var router = require("express").Router();
    // Crear un administrador
    router.post("/", administrador.create);
    // buscar administrador (con condición)
    router.get("/", administrador.findAll);
    // buscar administrador con id
    router.get("/:rut_admin", administrador.findOne);
    // actualizar administrador
    router.put("/:rut_admin", administrador.update);
    // eliminar administrador con id
    router.delete("/:rut_admin", administrador.delete);
    // eliminar todos los administrador
    router.delete("/", administrador.deleteAll);
    // agregar rutas al servidor
    app.use('/api/administrador', router);    
 };
