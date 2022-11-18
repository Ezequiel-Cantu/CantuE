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
 * /usuario: 
 *    get: 
 *     description: Welcome to swagger-jsdoc! 
 *     responses: 
 *       200: 
 *         description: Regresa una lista de usuarios. 
 */

router.get('/', async(req,res) =>{
    const [responseBD] = await pool.execute('SELECT * FROM usuario');
    res.json(responseBD);
});

router.get('/:idUsuario', async(req,res) =>{
    const ID = req.params.idUsuario;
    const [responseBD] = await pool.execute(`SELECT * FROM usuario WHERE idUsuario=${ID}`);
    res.json(responseBD);
});

router.post('/', async (req,res) => {
    const [responseBD] = await pool.execute(`INSERT INTO usuario(Nombre, ApPat, Edad, Ocupacion, Usuario, Telefono, Genero, Contrasena) VALUES ('${req.body.Nombre}','${req.body.ApPat}','${req.body.Edad}','${req.body.Ocupacion}','${req.body.Usuario}','${req.body.Telefono}','${req.body.Genero}','${req.body.Contrasena}')`);
    res.send(responseBD);
});
router.put('/:idUsuario', async (req,res) => {
    const ID = req.params.idUsuario;
    const [responseBD] = await pool.execute(`UPDATE usuario SET Nombre='${req.body.Nombre}',ApPat='${req.body.ApPat}',Edad='${req.body.Edad}',Ocupacion='${req.body.Ocupacion}',Usuario='${req.body.Usuario}',Telefono='${req.body.Telefono}',Genero='${req.body.Genero}',Contrasena='${req.body.Contrasena}' WHERE idUsuario=${ID}`);
    res.send(responseBD);
});
router.delete('/:idUsuario', async (req,res) => {
    const ID = req.params.idUsuario;
    const [responseBD] = await pool.execute(`DELETE FROM usuario WHERE idUsuario=${ID}`);
    res.json(responseBD);
});
module.exports.router = router;