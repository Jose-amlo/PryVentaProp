// Importar dependencias
const db = require("../models");
const Usuario = db.usuario;
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
