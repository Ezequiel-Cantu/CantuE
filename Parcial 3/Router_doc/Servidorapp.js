const express = require('express');
const cors = require('cors');
const rutaUsuario = require('./rutas/rutaUsuario')
const mysql2 = require('mysql2/promise');
const path = require('path')
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc')


const pool = mysql2.createPool({
    host : 'localhost',
    user : 'root',
    port: '3306',
    password : '',
    database : 'l19100155'
});

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Usuarios',
            version: '1.0.0',
        },
        servers: [
            {url: "http://localhost:8082"}
        ],
    },
    apis: [`${path.join(__dirname,"./rutas/rutaUsuario.js")}`]
}

const app = express();
app.use(cors({ origin: "http://localhost:8080"}))

app.use(express.text())
app.use(express.json())

app.use('/usuario', rutaUsuario.router);

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.listen(8082,(req,res) => {
    console.log('Este server esta escuchando por puerto 8082');
    console.log(__dirname);
});


