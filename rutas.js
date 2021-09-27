const router = require("express").Router();
const conexion = require("./config/conexion");

//---------------asignamos todas las rutas-------
//list movies
router.get("/", (req, res) => {
    let sql = "select * from movie";
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows);
        }
    });
});

//get a movie
router.get("/:id", (req, res) => {
    const { id } = req.params;
    let sql = "select * from movie where mov_id = ?";
    conexion.query(sql, [id], (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows);
        }
    });
});

//add a movie
router.post("/", (req, res) => {
    const {
        mov_title,
        mov_year,
        mov_time,
        mov_lang,
        mov_dt_rel,
        mov_rel_country,
    } = req.body;
    let sql = `insert into movie(mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country) values('${mov_title}', '${mov_year}', '${mov_time}','${mov_lang}','${mov_dt_rel}','${mov_rel_country}')`;
    conexion.query(sql, (err, rows, field) => {
        if (err) throw err;
        else {
            res.json({ status: "movie agregador" });
        }
    });
});

//delete
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    let sql = `delete from movie where mov_id = '${id}'`;
    conexion.query(sql, (err, rows, field) => {
        if (err) throw err;
        else {
            res.json({ status: "movie delete" });
        }
    });
});

//update
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const {
        mov_title,
        mov_year,
        mov_time,
        mov_lang,
        mov_dt_rel,
        mov_rel_country,
    } = req.body;

    let sql = `update movie set mov_title='${mov_title}',
    mov_year='${mov_year}',mov_time='${mov_time}',mov_lang='${mov_lang}',mov_dt_rel='${mov_dt_rel}',mov_rel_country='${mov_rel_country}' where mov_id = '${id}'`;

    conexion.query(sql, (err, rows, field) => {
        if (err) throw err;
        else {
            res.json({ status: "update movie" });
        }
    });
});

module.exports = router;
