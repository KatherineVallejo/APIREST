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

    }
    getegresados(res) {
        egresados.find({}, (err, egresados) => {
            if (err) throw err;
            res.send(egresados);
    })

    }
   setegresados(egresado, res) {
       egresado.create(user, function(err, newegresado){
           if(err) throw err;
           res.send({status: 200, nU: newegresado});
       })

    }
    getusuarios(res) {
        usuarios.find({}, (err, usuarios) => {
            if (err) throw err;
            res.send(usuarios);
    })

  }
   setusuarios(usuarios, res) {
       usuarios.create(user, function(err, newusuarios){
           if(err) throw err;
           res.send({status: 200, nU: newusuarios});
       })

    }
    getcomunicados(res) {
        comunicados.find({}, (err, comunicados) => {
            if (err) throw err;
            res.send(comunicados);
    })

  }
   setcomunicados(comunicados, res) {
       comunicados.create(user, function(err, newcomunicados){
           if(err) throw err;
           res.send({status: 200, nU: newcomunicados});
       })

    }
    getofertas(res) {
        ofertas.find({}, (err,ofertas) => {
            if (err) throw err;
            res.send(ofertas);
    })

  }
   setofertas(ofertas, res) {
       ofertas.create(user, function(err, newofertas){
           if(err) throw err;
           res.send({status: 200, nU: newofertas});
       })

    }
    gettitulo(res){
        titulo.find({}, (err, titulo) => {
            if (err) throw err;
            res.send(titulo);
    })

      }
   settitulo(titulo, res) {
       titulo.create(user, function(err, newtitulo){
           if(err) throw err;
           res.send({status: 200, nU: newtitulo});
       })

    }
}
exports.controller = new controller