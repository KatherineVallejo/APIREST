const mongoose = require("mongoose");
const egresados = require("./models/egresados");
const usuarios = require("./models/usuarios");
const titulo = require("./models/titulo");
const ofertas = require("./models/ofertas");
const comunicados = require("./models/comunicados");

class controller {
    constructor() {
        this.connect();
    }
    async connect() {
        try {
            await mongoose.connect(
                "mongodb+srv://Kathe:012345milena@cluster0-rqan4.mongodb.net/APIREST?retryWrites=true&w=majority",
                { useNewUrlParser: true }
            );
            console.log("Conectado!")

        } catch (e) {
            console.error(e)
        }
    };
    getusuarios(res) {
        usuarios.find({}, (err, usuarios) => {
            if (err) throw err;
            res.send(usuarios);

        });
    }
    getusuario(res, id) {
        usuarios.find({ _id: id }, (err, usuario) => {
            if (err) throw err;
            res.send(usuario);
        });
    }

    setusarios(res, data) {
        usuarios.create(data, (err, newUsuarios) => {
            if (err) throw err;
            res.send({
                status: 200,
                nU: newUsuarios
            });
        })
    }
    delUsuarios(res, id) {
        usuarios.deleteOne({
            _id: id
        }, (err) => {
            if (err) throw err;
            res.send('Eliminado!')
        })
    }
    updateUsuario(res, id, datos) {
        usuarios.updateOne({
            _id: id
        }, {
                $set: {
                    contraseña: datos.contraseña
                }
            })
            .then(response => {
                res.send({
                    msg: "Actualizado!",
                    raw: response
                })
            })
            .catch(err => {
                if (err) throw err;
            })
    }
    //
    getegresados(res) {
        egresados.find({}, (err, egresados) => {
            if (err) throw err;
            res.send(egresados);

        });

    }
    delEgresado(res, id) {
        egresados.deleteOne({
            _id: id
        }, (err) => {
            if (err) throw err;
            res.send('Eliminado!')
        })
    }
    //
    getcomunicados(res) {
        comunicados.find({}, (err, comunicados) => {
            if (err) throw err;
            res.send(comunicados);

        });
    }
    updateComunicados(res, id, datos) {
        comunicados.updateOne({
            _id: id
        }, {
                $set: {
                    titulo: datos.titulo
                }
            })
            .then(response => {
                res.send({
                    msg: "Actualizado!",
                    raw: response
                })
            })
            .catch(err => {
                if (err) throw err;
            })
    }
    delComunicado(res, id) {
        comunicados.deleteOne({
            _id: id
        }, (err) => {
            if (err) throw err;
            res.send('Eliminado!')
        })
    }
    //
    getofertas(res) {
        ofertas.find({}, (err, ofertas) => {
            if (err) throw err;
            res.send(ofertas);

        });
    }
    updateOfertas(res, id, datos) {
        ofertas.updateOne({
            _id: id
        }, {
                $set: {
                    descripcion: datos.descripcion
                }
            })
            .then(response => {
                res.send({
                    msg: "Actualizado!",
                    raw: response
                })
            })
            .catch(err => {
                if (err) throw err;
            })
    }
    delOferta(res, id) {
        ofertas.deleteOne({
            _id: id
        }, (err) => {
            if (err) throw err;
            res.send('Eliminado!')
        })
    }
    gettitulo(res) {
        titulo.find({}, (err, titulo) => {
            if (err) throw err;
            res.send(titulo);

        });
    }
    updateTitulo(res, id, datos) {
        titulo.updateOne({
            _id: id
        }, {
                $set: {
                    fecha_expedicion: datos.fecha_expedicion
                }
            })
            .then(response => {
                res.send({
                    msg: "Actualizado!",
                    raw: response
                })
            })
            .catch(err => {
                if (err) throw err;
            })
    }
    delTitulo(res, id) {
        titulo.deleteOne({
            _id: id
        }, (err) => {
            if (err) throw err;
            res.send('Eliminado!')
        })
    }
}
exports.controller = new controller()