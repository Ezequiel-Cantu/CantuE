const express = require('express');
const cors = require('cors');
const rutaUsuario = require('./rutaUsuario')
const mysql2 = require('mysql2/promise');


const pool = mysql2.createPool({
    host : 'localhost',
    user : 'root',
    port: '3306',
    password : '',
    database : 'l19100155'
});

const app = express();
app.use(cors({ origin: "http://localhost:8080"}))

app.use(express.text())
app.use(express.json())

app.use('/usuario', rutaUsuario.router);

app.listen(8082,(req,res) => {
    console.log('Este server esta escuchando por puerto 8082');
});


