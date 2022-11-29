let funciones = require('../src/funciones.js');
let chai = require('chai');
let should = chai.should();
let expect = chai.expect();
let assert = chai.assert();

describe('Funcion potencia: ', function() {
    it('Deberia regresar un numero', function() {
        let resultado = funciones.potencia(2,3);
        resultado.should.be.a('number');
        resultado.should.equal(8);
    });
});

describe('Funcion potencia (expect)', function(){
    it('Deberia regresar un numero', function(){

        let resultado = funciones.potencia(2,3)
        expect(resultado).to.be.a('number');
        expect(resultado).to.equal(8)
    });
});

describe('Funcion potencia (assert)', function(){
    it('Deberia regresar un numero', function(){

        let resultado = funciones.potencia(2,3)
        expect(resultado).to.be.a('number');
        expect(resultado).to.equal(8)
    });
});

