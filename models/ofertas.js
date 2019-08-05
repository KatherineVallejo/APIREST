const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ofertasSchema = new Schema({
    id: Object,
    cargo: String,
    empresa: String,
    ciudad: String,
    requisitos: String,
    experiencia: String,
    descripcion: String,
    vacantes: String,
    postulacion: String,
    id_usuarios: Array,
});

var ofertas = mongoose.model("ofertas", ofertasSchema);
module.exports = ofertas;