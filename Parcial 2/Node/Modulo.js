function pasarMayusc(cadena){
    return cadena.toUpperCase()    
    
}
function SinESpacios(cadena){
    return cadena.replace(/ /g,"");
}
function Contar(cadena){
    return cadena.length;
}

exports.pasarMayusc = pasarMayusc;
exports.SinESpacios = SinESpacios;
exports.Contar = Contar;

console.log(module);