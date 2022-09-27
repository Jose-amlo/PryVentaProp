module.exports = app => {
    const venta = require("../controllers/venta.controller.js");
    var router = require("express").Router();
    // Crear un usuario
    router.post("/", usuario.create);
    // buscar usuario (con condición)
    router.get("/", usuario.findAll);
    // buscar usuario con id
    router.get("/:nombre_usuario", usuario.findOne);
    // actualizar usuario
    router.put("/:nombre_usuario", usuario.update);
    // eliminar usuario con id
    router.delete("/:nombre_usuario", usuario.delete);
    // eliminar todos los usuario
    router.delete("/", usuario.deleteAll);
    // agregar rutas al servidor
    app.use('/api/usuario', router);    
 };
