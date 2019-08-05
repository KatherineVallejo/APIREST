const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    id: Object,
    nombre: String,
    contraseña: String,
    id_egresados: Object
});

var usuarios = mongoose.model("usuarios", usuariosSchema);
module.exports = usuarios;