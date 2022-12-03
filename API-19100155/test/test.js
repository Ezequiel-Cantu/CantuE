import chai from 'chai'
import chaiHttp from 'chai-http'
var expect = chai.expect
//import expect from chai.expect
//import expect from 'chai.expect'

chai.should()
chai.use(chaiHttp)

const url = 'https://API-19100155.ezequiel-cantu.repl.co'

describe("Obtiene bailarines: ", () => {
             it("Deberia obtener todos los bailarines", (done) => {
               chai.request(url)
                   .get("/bailarines")
                   .end(function(err, response){
                     expect(response).to.have.status(200);
                     expect(response).to.be.json
                   done();
                   });
   });
 });
  
 
  /**
  * Testing GET{ID} route
  */
describe("Obtiene bailarines: ", () => {
             it("Deberia obtener todos los bailarines", (done) => {
               chai.request(url)
                   .get("/bailarines/63786bc29ac9d57aac85a2da")
                   .end(function(err, response){
                     expect(response).to.have.status(200);
                     expect(response).to.be.json
                   done();
                   });
   });
 });

  /**
  * Testing DELETE route
  */
describe("Elimina bailarines: ", () => {
             it("Deberia eliminar el bailarin especificado", (done) => {
               chai.request(url)
                   .delete("/bailarines/63838f6dddef86277a918d9e")
                   .end(function(err, response){
                     expect(response).to.have.status(200);
                     expect(response).to.be.json
                   done();
                   });
   });
 });
