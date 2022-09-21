const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors({ origin: "http://localhost:8080"}))

app.get('/',(req,res)=>{
    //res.send('Servidor express en funcion')
    res.sendFile('./Static/Index.html',{root: __dirname}, (err) => {console.log('Achivo enviado correctamente')})
});
app.post('/',(req,res)=>{
    res.json({usuario: 'Ezequiel'})
});

app.use((req,res) => {
    res.status(404).sendFile('./Static/404.html',{root: __dirname})
});

app.listen(8082,(req,res) => {
    console.log('Server escuchando por puerto 8082')
    console.log(__dirname)
    console.log(__filename)
});