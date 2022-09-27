module.exports = app => {
    const venta = require("../controllers/venta.controller.js");
    var router = require("express").Router();
    // Crear un venta
    router.post("/", venta.create);
    // buscar venta (con condición)
    router.get("/", venta.findAll);
    // buscar venta con id
    router.get("/:id", venta.findOne);
    // actualizar venta
    router.put("/:id", venta.update);
    // eliminar venta con id
    router.delete("/:id", venta.delete);
    // eliminar todos los venta
    router.delete("/", venta.deleteAll);
    // agregar rutas al servidor
    app.use('/api/venta', router);    
 };
