module.exports = app => {
    const venta = require("../controllers/venta.controller.js");
    var router = require("express").Router();
    // Crear un venta
    router.post("/", venta.create);
    // buscar venta (con condición)
    router.get("/", venta.findAll);
    // buscar venta con id
    router.get("/:id_venta", venta.findOne);
    // actualizar venta
    router.put("/:id_venta", venta.update);
    // eliminar venta con id
    router.delete("/:id_venta", venta.delete);
    // eliminar todos los venta
    router.delete("/", venta.deleteAll);
    // agregar rutas al servidor
    app.use('/api/venta', router);    
 };
