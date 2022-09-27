// Importar dependencias
const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;
// Crear un nuevo cliente
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
// Retornar los clientes de la base de datos.
exports.findAll = (req, res) => {
    const nombre_usuario = req.query.nombre_usuario;
    var condition = nombre_usuario ? { nombre_usuario: { [Op.like]: `%${nombre_usuario}%` } } : null;
    Usuario.findAll({ where: condition })
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
// Buscar un cliente por su id
exports.findOne = (req, res) => {
    const nombre_usuario = req.params.nombre_usuario;
    Usuario.findByPk(nombre_usuario)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontró al cliente.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en la búsqueda"
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
// eliminar un cliente
exports.delete = (req, res) => {
    const nombre_usuario = req.params.nombre_usuario;
    Usuario.destroy({
        where: { nombre_usuario: nombre_usuario }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Cliente eliminado"
            });
        } else {
            res.send({
                message: `Cliente no encontrado`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error al eliminar cliente"
        });
    });
};
// eliminar a todos los clientes
exports.deleteAll = (req, res) => {
    Usuario.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} clientes eliminados!` });
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error al eliminar a todos los clientes."
        });
    });
};
