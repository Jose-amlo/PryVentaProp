module.exports = app => {
    const usuario = require("../controllers/usuario.controller.js");
    var router = require("express").Router();
    // Crear un cliente
    router.post("/", usuario.create);
    // buscar clientes (con condición)
    router.get("/", usuario.findAll);
    // buscar cliente con id
    router.get("/:id", usuario.findOne);
    // actualizar cliente
    router.put("/:id", usuario.update);
    // eliminar cliente con id
    router.delete("/:id", usuario.delete);
    // eliminar todos los clientes
    router.delete("/", usuario.deleteAll);
    // agregar rutas al servidor
    app.use('/api/usuario', router);
 };
