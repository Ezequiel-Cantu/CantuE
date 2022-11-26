var express = require('express');
const mysql2 = require('mysql2/promise');
var router = express.Router()

const pool = mysql2.createPool({
    host : 'localhost',
    user : 'root',
    port: '3306',
    password : '',
    database : 'l19100155'
});

/** 
 * @swagger 
 * /bailarin: 
 *    get: 
 *     description: Welcome to swagger-jsdoc! 
 *     responses: 
 *       200: 
 *         description: Regresa una lista de bailarines. 
 */

router.get('/', async(req,res) =>{
    const [responseBD] = await pool.execute('SELECT * FROM bailarin');
    res.json(responseBD);
});

router.get('/:idBailarin', async(req,res) =>{
    const ID = req.params.idUsuario;
    const [responseBD] = await pool.execute(`SELECT * FROM bailarin WHERE idBailarin=${ID}`);
    res.json(responseBD);
});

router.post('/', async (req,res) => {
    const [responseBD] = await pool.execute(`INSERT INTO bailarin(Nombre, Apellido, Danza, Genero, Imagen) VALUES ('${req.body.Nombre}','${req.body.Apellido}','${req.body.Danza}','${req.body.Genero}','${req.body.Imagen}'`);
    res.send(responseBD);
});
router.put('/:idBailarin', async (req,res) => {
    const ID = req.params.idUsuario;
    const [responseBD] = await pool.execute(`UPDATE bailarin SET Nombre='${req.body.Nombre}',Apellido='${req.body.Apellido}',Danza='${req.body.Danza}',Genero='${req.body.Genero}',Imagen='${req.body.Imagen}' WHERE idBailarin=${ID}`);
    res.send(responseBD);
});
router.delete('/:idBailarin', async (req,res) => {
    const ID = req.params.idUsuario;
    const [responseBD] = await pool.execute(`DELETE FROM bailarin WHERE idBailarin=${ID}`);
    res.json(responseBD);
});
module.exports.router = router;