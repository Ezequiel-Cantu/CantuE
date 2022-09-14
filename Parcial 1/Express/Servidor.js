const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors({ origin: "http://localhost:8082"}))

app.get('/',(req,res)=>{
    res.send('Servidor express en funcion')
});
app.post('/',(req,res)=>{
    res.send('Post hecho con el servidor Express')
});
app.listen(8082,(req,res)=>{
    console.log('Server escuchando por puerto 8082')
});