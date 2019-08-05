const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const egresadosSchema = new Schema({
id: Object,
nombre_1: String,
nombre_2: String,
apellido_1: String,
apellido_2: String,
perfil_profesional: String,
identificación: String,
dirección: String,
correo: String,
telefono: String,
});

var egresados = mongoose.model("egresados", egresadosSchema);
module.exports = egresados;