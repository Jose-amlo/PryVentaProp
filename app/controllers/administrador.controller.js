// Importar dependencias
const db = require("../models");
const Administrador = db.administrador;
const Usuario = db.usuario;
const Propiedad = db.propiedad;
const Op = db.Sequelize.Op;
// Crear un nuevo admin
exports.create = (req, res) => {
    // Validar consulta
    if (!req.body.rut_admin) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Admin
    const administrador= {
        rut_admin: req.body.rut_admin,
        correo_admin: req.body.correo_admin,
        telefono_admin: req.body.telefono_admin
    };
    // Guardar en base de datos
    Admin.create(administrador)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error al crear un nuevo admin"
        });
    });
};
// Retornar los usuarios de la base de datos.
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
                message: `No se encontró el usuario.`
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
                message: "Usuario actualizado."
            });
        } else {
            res.send({
                message: `No se pudo actualizar el usuario`
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
                message: "Usuario eliminado"
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
// Retornar las propiedades de la base de datos.
exports.findAll = (req, res) => {
    const id_propiedad = req.query.id_propiedad;
    var condition = id_propiedad? { id_propiedad: { [Op.like]: `%${id_propiedad}%` } } : null;
    Propiedad.findAll({ where: condition })
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
    const id_propiedad = req.params.id_propiedad;
    Propiedad.findByPk(id_propiedad)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontró la propiedad.`
            });
         }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en la búsqueda"
        });
    });
};
// actualizar una propiedad por su id
exports.update = (req, res) => {
    const id_propiedad = req.params.id_propiedad;
    Propiedad.update(req.body, {
        where: { id_propiedad: id_propiedad }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Usuario actualizado."
            });
        } else {
            res.send({
                message: `No se pudo actualizar el usuario`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en actualización"
        });
    });
};

// eliminar una propiedad
exports.delete = (req, res) => {
    const id_propiedad = req.params.id_propiedad;
    Propiedad.destroy({
        where: { id_propiedad: id_propiedad }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Usuario eliminado"
            });
        } else {
            res.send({
                message: `Propiedad no encontrado`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error al eliminar propiedad"
        });
    });
};

// eliminar a todos los clientes
exports.deleteAll = (req, res) => {
    Propiedad.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} propiedades eliminadas!` });
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error al eliminar a todos los clientes."
        });
    });     
};
