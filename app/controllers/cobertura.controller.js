// Importar dependencias
const db = require("../models");
const Cobertura = db.cobertura;
const Op = db.Sequelize.Op;
// Crear un nuevo cliente
exports.create = (req, res) => {
    // Validar consulta
    if (!req.body.tipo_cobertura) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Cliente
    const cobertura= {
        tipo_cobertura: req.body.tipo_cobertura,
        id_seguro: req.body.id_seguro
    };
    // Guardar en base de datos
    Cobertura.create(cobertura)
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
    const tipo_cobertura = req.query.tipo_cobertura;
    var condition = tipo_cobertura ? { tipo_cobertura: { [Op.like]: `%${tipo_cobertura}%` } } : null;
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
    const tipo_cobertura = req.params.tipo_cobertura;
    Usuario.findByPk(tipo_cobertura)
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
    const tipo_cobertura = req.params.tipo_cobertura;
    Cobertura.update(req.body, {
        where: { tipo_cobertura: tipo_cobertura }
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
    const tipo_cobertura = req.params.tipo_cobertura;
    Cobertura.destroy({
        where: { tipo_cobertura: tipo_cobertura }
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
