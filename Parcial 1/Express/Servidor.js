const express = require('express');
const cors = require('cors');
var morgan = require('morgan')
var fs = require('fs')
var path = require('path')
/* const cadenas = require('./cadena');
const { response } = require('express'); */


const app = express();
const router = express.Router();

app.use(cors({ origin: "http://localhost:8080"}))
app.use(express.text())
app.use(express.json())
app.use(router)

var accessLogStream=fs.createWriteStream(path.join(__dirname, 'acces.log'), { flags: 'a'})
app.use(morgan('combined',{stream: accessLogStream}))

router.route('/clientes')
      .all((req,resp,next)=>{console.log('Peticion a ruta de clientes')})
      .get((req,resp,next)=>{console.log('Peticion get a clientes');resp.send('regresando del get a cliente');})
      .put((req,resp,next)=>{console.log('Peticion put a clientes');resp.send('regresando del put a cliente');})

/* app.use(morgan('combined')) */

/* app.use((req,res,next)=>{
    console.log("PRIMER funcion middleware")
    next()
},(req,res,next)=>{
    console.log("SEGUNDA funcion middleware")
    next()
}) */

app.get('/',(req,res)=>{
    //res.send('Servidor express en funcion')
    res.sendFile('./Static/Index.html',{root: __dirname}, (err) => {console.log('Achivo enviado correctamente')})
})


// Procesamiento de Texto
/* app.post('/texto',(req,res)=>{
    console.log(req.body)
    let mayus = cadenas.pasarMayusc(req.body);
    let sinEspacio = cadenas.SinESpacios(req.body);
    let longit = cadenas.Contar(req.body);
    res.json({mayusculas: mayus,
              NoEspacios: sinEspacio,
              longitud: longit
        })
})
 */
// Tener un Json
/* app.post('/json',(req,res) =>{
    console.log(req.body.nombre)
    let cadena = "Bienvenido " +req.body.nombre+ " " +req.body.apellido+ ", este es un json"
    res.json({saludo:cadena})
})

app.get('/mayusculas/:cadena',(req,res) =>{
    console.log(req.params)
    res.send(req.params)
})

app.get('/suma',(req,res) => {
    console.log(req.query)
    let suma = parseInt(req.query.a) + parseInt(req.query.b)
    res.send(`El resultado es ${suma}`)
})
 */

app.use((req,res) => {
    res.status(404).sendFile('./Static/404.html',{root: __dirname})
})

app.listen(8082,(req,res) => {
    console.log('Server escuchando por puerto 8082')
    console.log(__dirname)
    console.log(__filename)
})