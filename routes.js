const express = require("express");
const app = express();
const { controller } = require("./controller");
const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send(`
<center>
<h1 style="font-family;'Helvetica'">Bienvenidos a Bases de Datos!</h1>
</center>

    `);
})


app.get("/usuarios", (req, res) => {
    controller.getusuarios(res);
})
app.get("/usuarios/:id", (req, res) => {
    let id = req.params.id;
    controller.getusuario(res, id)
})
app.post("/egresados/:id/crear-usuario", function(req, res) {
    let { usuario } = req.body;
    let id = req.params.id;
    usuario.id_egresados = id;
    controller.setusarios(res, usuario);
})
app.delete("/usuarios/:id", (req, res) => {
    let id = req.params.id;
    controller.delUsuarios(res, id);
})
app.put("/usuarios/:id", (req, res) => {
    let id = req.params.id;
    let datos = req.body.datos;
    controller.updateUsuario(res, id, datos);
})

//
app.get("/egresados", (req, res) => {
    controller.getegresados(res);
})
app.delete("/egresados", (req, res) => {
    let id = req.params.id;
    controller.delEgresado(res, id);
})
//
app.get("/comunicados", (req, res) => {
    controller.getcomunicados(res);
})
app.put("/comunicados/:id", (req, res) => {
    let id = req.params.id;
    let datos = req.body.datos;
    controller.updateComunicados(res, id, datos);
})
app.delete("/comunicados/:id", (req, res) => {
    let id = req.params.id;
    controller.delComunicado(res, id);
})
//
app.get("/ofertas", (req, res) => {
    controller.getofertas(res);
})
app.put("/ofertas/:id", (req, res) => {
    let id = req.params.id;
    let datos = req.body.datos;
    controller.updateOfertas(res, id, datos);
})
app.delete("/ofertas/:id", (req, res) => {
    let id = req.params.id;
    controller.delOferta(res, id);
})
//
app.get("/titulo", (req, res) => {
    controller.gettitulo(res);
})
app.delete("/titulo/:id", (req, res) => {
    let id = req.params.id;
    controller.delTitulo(res, id);
})
exports.app = app;