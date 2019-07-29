const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
id: Object,
usuario: String,
contraseña: String,
id_egresados: Object,
id_ofertas: Object,
id_comunicados: Object,
});

var usuarios = mongoose.model("usuarios", usuariosSchema);
module.exports = usuarios;