const express = require("express");
const app = express();
const {controller} = require("./controller");



app.get('/', (req, res) => {
    res.send(`
<center>
<h1 style="font-family;'Helvetica'">Bienvenidos a Bases de Datos!</h1>
</center>

    `);
})


app.get("/egresados", (req, res) => {
    // let egresados = [
    //     {
    //         id: "01", nombre_1: "Maria", nombre_2: "Andrea", apellido_1: "Pastrana", apellido_2: "Castro", perfil_profesional: "...",
    //         cc: "1.234.556.776", direccion: "calle 45 nro 3-2", correo: "madrpastrana@gmail.com", telefono: "320 897 4563"
    //     },
    //     {
    //         id: "02", nombre_1: "Jose", nombre_2: "Alberto", apellido_1: "Ramos", apellido_2: "Perez", perfil_profesional: "...",
    //         cc: "1.000.567.342", direccion: "calle 25w nro 2da", correo: "Joseramos@gmail.com", telefono: "314 589 2344"
    //     },
    //     {
    //         id: "03", nombre_1: "Luisa", nombre_2: "Fernanda", apellido_1: "Gonzalez", apellido_2: "Petro", perfil_profesional: "...",
    //         cc: "1.532.001.242", direccion: "calle 16 nro 3-4", correo: "Fernanda77@gmail.com", telefono: "300 482 5590"
    //     },
    // ]
    controller.getegresados(res);
})


app.post("/egresados", (req, res)=>{
    let egresado = req.body;
    controller.setegresados(egresado, res);
});


app.get("/usuarios", (req, res) => {
    // let usuarios = [
    //     {id:"01", usuario:"MariaP", contraseña:"xyu6745"},
    //     {id:"02", usuario:"Joalberto", contraseña:"eder8900"},
    //     {id:"03", usuario:"Luisa77", contraseña:"24gonzalez_"},
    // ]
    controller.getusuario(res)
})

app.post("/usuarios", (req, res)=>{
    let { usuarios } = req.body;
    controller.setusuarios(usuarios, res);
});


app.get("/ofertas", (req, res) => {
    // let ofertas = [
    //     {
    //         id: "01", cargo: "Docente", empresa: "Renacer", ciudad: "Medellin", requisitos: "...", experiencia: "1 año",
    //         descripcion: "...", vacantes: "5", postulacion: "Aceptar o Rechazar"
    //     },

    //     {
    //         id: "02", cargo: "Programador", empresa: "Recovery S.A", ciudad: "Cali", requisitos: "...", experiencia: "1 año",
    //         descripcion: "...", vacantes: "11", postulacion: "Aceptar o Rechazar"
    //     },

    //     {
    //         id: "03", cargo: "Programador", empresa: "Une", ciudad: "Medellin", requisitos: "...", experiencia: "Sin experiencia",
    //         descripcion: "...", vacantes: "20", postulacion: "Aceptar o Rechazar"
    //     },
    // ]
    controller.getofertas(res);
})

app.post("/ofertas", (req, res)=>{
    let { ofertas } = req.body;
    controller.setofertas(ofertas, res);
});


app.get("/comunicados", (req, res) => {
    // let comunicados = [
    //     { id: "01", tipo: "Oferta", fecha: "Julio/28/2019", titulo: "Oferta de empleo", descripcion: "..." },

    //     { id: "02", tipo: "Noticia", fecha: "Julio/24/2019", titulo: "Abren mas de 100 vacantes para programadores en Bogota", descripcion: "..." },

    //     { id: "03", tipo: "Ofertas en el SENA", fecha: "Julio/22/2019", titulo: "Abren mas de 40 vacantes en el SENA", descripcion: "..." },
    // ]
    controller.getcomunicados(res);
})

app.post("/comunicados", (req, res)=>{
    let { comunicados } = req.body;
    controller.setcomunicados(comunicados, res);
});


app.get("/titulo", (req, res) => {
    // let titulo = [
    //     { id: "01", titulo: "Lic. Informatica", fecha_expedicion: "diciembre/10/2017", nro_tarjeta_profesional: "******" },

    //     { id: "02", titulo: "Lic. Informatica", fecha_expedicion: "enero/20/2017", nro_tarjeta_profesional: "******" },

    //     { id: "03", titulo: "Lic. Informatica", fecha_expedicion: "diciembre/20/2017", nro_tarjeta_profesional: "******" },
    // ]
    controller.gettitulo(res);
})

app.post("/titulo", (req, res)=>{
    let { titulo } = req.body;
    controller.settitulo(titulo, res);
});

exports.app = app;