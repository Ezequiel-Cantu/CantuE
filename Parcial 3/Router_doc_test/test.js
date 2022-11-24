let   chai     = require('chai');
let   chaiHttp = require('chai-http');
const expect   = require('chai').expect;
chai.use(chaiHttp);

const url= 'http://localhost:8082';

// Encapsular en test dentro de la funcion describe() Y describirmos el test
describe('Inserta un empleado: ',()=>{
            it('deberia insertar in empleado', (done) => {
                // En la funcion it() lo que deberia hacer
                chai.request(url)
                .post('/usuario')
                .send({ nombre:"Ezequiel", apPat:"Cantu", Edad:21, Ocupacion:"Programador", Usuario:"L19100155", Telefono:8671829812,Genero:"Masculino",Contrasena:"148j3shi"})
                .end( function(err,res){
                             expect(res).to.have.status(200);
                             expect(res.text).to.be.a('string');
                             done();                           
                            });
            });
});

describe('Obtiene empleados: ',()=>{
    it('Deberia obtener todos los usuario', (done) => {
            chai.request(url)
                        .get('/usuario')
                        .send()
                        .end( function(err,res){
                                  expect(res).to.have.status(200);
                                  expect(res).to.be.json;
                                  done();
                                });
    });
});