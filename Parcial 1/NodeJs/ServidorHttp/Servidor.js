const http = require('http');

const servidor =  http.createServer((req,res)=>{
     res.end('Servidor HTTP de NoteJS respuesta');
});

servidor.listen(8081,()=>{console.log('Servidor en curso')});
