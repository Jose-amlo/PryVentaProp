// Importar dependencias
const db = require("../models");
const Usuario = db.usuario;
const Venta = db.venta;
const Op = db.Sequelize.Op;
// Crear un nuevo clientet
exports.create = (req, res) => {
    // Validar consulta
    if (!req.body.nombre_usuario) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Cliente
    const usuario= {
        nombre_usuario: req.body.nombre_usuario,
        fecha_nacimiento: req.body.fecha_nacimiento,
        correo: req.body.correo,
        telefono_usuario: req.body.telefono_usuario
    };
    // Guardar en base de datos
    Usuario.create(usuario)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error al crear un nuevo cliente"
        });
    });
};

// actualizar un cliente por su id
exports.update = (req, res) => {
    const nombre_usuario = req.params.nombre_usuario;
    Usuario.update(req.body, {
        where: { nombre_usuario: nombre_usuario }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Cliente actualizado."
            });
        } else {
            res.send({
                message: `No se pudo actualizar al cliente`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en actualización"
        });
    });
};

// Crear una nueva venta
exports.create = (req, res) => {
    // Validar consulta
    if (!req.body.id_venta) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a venta
    const venta= {
        id_venta: req.body.id_venta,
        mes_venta: req.body.mes_venta,
        monto_venta: req.body.monto_venta,
        telefono_usuario: req.body.telefono_usuario
    };
    // Guardar en base de datos
    venta.create(venta)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error al crear nueva venta"
        });
    });
};

// actualizar una venta por su id
exports.update = (req, res) => {
    const id_venta = req.params.id_venta;
    Venta.update(req.body, {
        where: { id_venta: id_venta }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Cliente actualizado."
            });
        } else {
            res.send({
                message: `No se pudo actualizar al cliente`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en actualización"
        });
    });
};
// eliminar una venta
exports.delete = (req, res) => {
    const id_venta = req.params.id_venta;
    Venta.destroy({
        where: { id_venta: id_venta }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "venta eliminada"
            });
        } else {
            res.send({
                message: `Venta no encontrada`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error al eliminar venta"
        });
    });
};
// eliminar todas las ventas
exports.deleteAll = (req, res) => {
    Ventas.destroy({
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

