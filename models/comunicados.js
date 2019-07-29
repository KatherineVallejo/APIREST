const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comunicadosSchema = new Schema({
id: Object,
tipo: String,
fecha: String,
titulo: String,
descripcion: String,
id_usuarios: Object,
});

var comunicados = mongoose.model("comunicados", comunicadosSchema);
module.exports = comunicados;