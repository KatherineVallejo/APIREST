const { app } = require("./routes")
app.listen(3000, ()=>{
console.log('Servidor On');
})

exports.app = app;
