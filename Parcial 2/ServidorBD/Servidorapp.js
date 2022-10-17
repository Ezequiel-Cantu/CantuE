const express = require('express');
let mysql = require('mysql')
let json2xls  = require('json2xls')
let fs = require('fs')

var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'l19100155'
});

const app = express()

app.use(express.text())
app.use(express.json())

app.get('/usuario/:idUsuario',(req,res) =>{
    
    con.connect();
    
    con.query('SELECT * FROM usuario WHERE idUsuario =' +req.params.idUsuario+ ';', function(error, results, fields) {
        console.log(results);
        res.json(results)
    });
    
    con.end();

})

app.listen(8082,(req,res) => {
    console.log('Server escuchando por puerto 8082')
})


