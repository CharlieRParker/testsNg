// Un archivo simple de TypeScript
// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a, b ){
// return (a + b) * 2
//}
var resultadoDoble = function (a, b) {
    return (a + b) * 2;
};
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
//function getAvenger( nombre, poder, arma ){
//  var mensaje;
//  if( poder ){
//     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
//  }else{
//     mensaje = nombre + " tiene un " + poder
//  }
//};
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        //mensaje = nombre + "tiene el poder de:" + poder + "y un arma:" + arma;
        console.log(mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma);
    }
    else {
        //mensaje = nombre + "tiene un " + poder;
        console.log(mensaje = nombre + " tiene un " + poder);
    }
}
getAvenger("marita", "pussy", "tetakens");
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
var cuadradoRectangulo = new Rectangulo(8, 8);
console.log("la media del cuadrado rectangulo es: " + cuadradoRectangulo.calcularArea());
