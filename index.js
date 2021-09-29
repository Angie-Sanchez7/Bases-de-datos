require("./config/conexion");

const express = require("express");
const port = ( process.env.PORT || 3000);
const path = require('path');
//express
const app = express();

//directorioPublic

app.use(express.static('public'))

//admitir
app.use(express.json());

//config
app.set("port", port);

//rutas
app.use("/api", require("./rutas"));

app.get( '*', (req, res) => {
    res.sendFile( path.resolve(__dirname, 'public/index.html'))
});

//Iniciar express
app.listen(app.get("port"), (error) => {
    if (error) {
        console.log("error al iniciar servidor: " + error);
    } else {
        console.log("servidor iniciado en el puerto" + port);
    }
});
