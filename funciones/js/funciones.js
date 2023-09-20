/** Funciones Declaracion
 * 
 * Palabra reservada "function"
 * nombre - camelCase
 * parametros
 * llaves de inicio y final del bloque {}
 * 
 */

//Ejemplo de funcion que no devuelve ninfun valor
function nuevaFuncion (){
    console.log("Nueva funcion");
}

/** Declarar una funcion que calcule el perimetro
 * de un cuadrado 
 * 
 * Necesitamos uno de sus lados 
 * L
 * 
 * Expresion matematica que resuelve
 * p=L+L+L+L
 * p=L*4
 * 
 */

let lado=100;
let perimetro= lado*4;

// function calcularPerimetroCuadrado(lado){
//     //Codigo que se va a ejecutar
//     let perimetro=lado*4
//     return perimetro;
// }

// function calcularPerimetroCuadrado(lado){
//   //Agregar mensajes a la terminal con ""
//     let perimetro=lado*4
//     console.log("El perimetro calculado es de: " + perimetro + " metros");
// }

function calcularPerimetroCuadrado (lado){
    let perimetro= lado*4
    return `El perimetro calculado es de ${perimetro} metros`;
}

/**Funcion para saludar a distintal personas 
 * 
 * Como parametro vamos a recibir un nombre en
 * forma de string
*/

// function saludarPersonas (nombre){
//     return "Hola " + nombre;
// }

function saludarPersonas (nombre){
    return nombre.toLowerCase();
}

/** Funciones flecha - arrow function
 * 
 * Palabra reservada - const
 * Convencion de escritura camelCase
 * Nombre
 * Operador de asignacion '='
 * () que representan parametros
 * => evita usar el return, pero funciona igual
 * 
 */

// Declaracion general de una funcion flecha
const nuevaFuncionFlecha=(parametros) => console.log("Hola " + parametros);

//Calcular el perimetro de un cuadrado en una funcion flecha
const perimetroFlecha=(lado)=> perimetro = lado*4;