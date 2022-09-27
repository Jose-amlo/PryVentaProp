module.exports = app => {
    const usuario = require("../controllers/client.controller.js");
    var router = require("express").Router();
    // Crear un cliente
    router.post("/", usuario.create);
    // buscar clientes (con condición)
    router.get("/", usuario.findAll);
    // buscar cliente con id
    router.get("/:nombre_usuario", usuario.findOne);
    // actualizar cliente
    router.put("/:nombre_usuario", usuario.update);
    // eliminar cliente con id
    router.delete("/:nombre_usuario", usuario.delete);
    // eliminar todos los clientes
    router.delete("/", usuario.deleteAll);
    // agregar rutas al servidor
    app.use('/api/usuario', router);
 };
