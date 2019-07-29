const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tituloSchema = new Schema({
id: Object,
titulo: String,
fecha_expedicion: String,
numero_tarjeta_profesional: String,
id_egresado: Object,
});

var titulo = mongoose.model("titulo", tituloSchema);
module.exports = titulo;