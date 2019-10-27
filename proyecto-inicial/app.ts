// Un archivo simple de TypeScript

// Uso de Let y Const
let nombre: string = "Ricardo Tapia";
let edad: number = 23;

const PERSONAJE: { nombre: string; edad: number } = {
  nombre: nombre,
  edad: edad
};

// Cree una interfaz que sirva para validar el siguiente objeto
interface Batman {
  nombre: string;
  artesMarciales: string[];
}

let batman: Batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};

// Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a, b ){
// return (a + b) * 2
//}

let resultadoDoble = (a: number, b: number) => {
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

function getAvenger(nombre: string, poder?: string, arma: string = "arco") {
  let mensaje: string;

  if (poder) {
    //mensaje = nombre + "tiene el poder de:" + poder + "y un arma:" + arma;
    console.log( mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`);
  } else {
    //mensaje = nombre + "tiene un " + poder;
   console.log( mensaje = `${nombre} tiene un ${poder}`);
  }
}



getAvenger("marita","pussy","tetakens");


// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método

class Rectangulo {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea(): number {
    return this.base * this.altura;
  }
}

let cuadradoRectangulo: Rectangulo = new Rectangulo(8, 8);

console.log("la media del cuadrado rectangulo es: " + cuadradoRectangulo.calcularArea());
