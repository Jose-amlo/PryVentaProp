// Importar dependencias
const db = require("../models");
const venta = db.venta;
const Op = db.Sequelize.Op;
// Crear una nuevo venta 
exports.create = (req, res) => {
    // Validar consulta
    console.log(req.body)
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Crear y guardar en base de datos
    venta.create({
            name: req.body.name,
            type: req.body.type,
            unit: req.body.unit
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Error al crear una venta"
            });
        });
};
// Retornar todos las ventas de la base de datos.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    venta.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error en la búsqueda"
            });
        });
};
// Buscar una venta por su id
exports.findOne = (req, res) => {
    const id = req.params.id;
    venta.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró la venta.`
                });
             }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en la búsqueda"
            });
        });
};
// actualizar una venta por su id
exports.update = (req, res) => {
    const id = req.params.id;
    venta.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "venta actualzada."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la venta`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en actualización"
            });
        });
};
// Eliminar un cliente
exports.delete = (req, res) => {
    const id = req.params.id;
    venta.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "venta eliminada"
                });
            } else {
                res.send({
                    message: `venta no encontrada`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar la venta"
            });
        });
};
// eliminar a todos las ventas
exports.deleteAll = (req, res) => {
    venta.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} ventas eliminadas!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error al eliminar todas las ventas."
            });
        });
};
