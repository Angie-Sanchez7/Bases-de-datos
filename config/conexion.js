const mysql = require("mysql");
const conexion = mysql.createConnection({
    host: "bitmiyxkwuy54zcxqnfc-mysql.services.clever-cloud.com",
    user: "ugvw0nyvf2dzcmfh",
    password: "1VJHylpaMmKqMNtSSFjp",
    port: 3306,
    database: "bitmiyxkwuy54zcxqnfc",
});

conexion.connect((err) => {
    if (err) {
        console.log("ocurrio un error" + err);
    } else {
        console.log("la base de datos se conecto!!!");
    }
});

setInterval(function () {
    conexion.query('SELECT 1');
}, process.env.PORT || 3000);

module.exports = conexion;
