const mysql = require("mysql");
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tupassword",
    port: 3306,
    database: "movie",
});

conexion.connect((err) => {
    if (err) {
        console.log("ocurrio un error" + err);
    } else {
        console.log("la base de datos se conecto!!!");
    }
});

module.exports = conexion;
