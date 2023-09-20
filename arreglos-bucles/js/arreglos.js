//Parte 1 arrays 

//Datos primitivos

//Declaracion de un arreglo de numeros
let numeros=[1, 2, 3, 4, 5];

//Declaracion de un arreglo de strings
let textos=["Hola", "saludos", "AFIRMATIVO"]; 

// Declaracion de un arreglo de datos booleanos
let binario=[true, false, true, false, true];

//Declaracion de un arreglo de datos null
let nuloVacion= [null, null, null, null, null];

//Datos no primitivos - objetos- complejos
//Declaracion de un arreglo de objetos
let discografiaMuse=[
{
    nombre: "Showbitz",
    año: 1999,
},
{
    nombre: "Origin of symetry",
    año: 2001,
},
{
    nombre: "Absolution",
    año: 2003,
}
];

// Declaracion de un arreglo de arreglos
let almacenadorDeArrays=[
    ["Hola", "Mundo"],
    [1,2],
    [true, null]
];

//Declaracion de un arreglo que almacena distintos datos
let aleatorio=[1, "hello", true, null, [1,0], {nombre: Fernando, edad: 22}];

/**
 * Como encontrar un elemento de un arreglo
 * 
 * Vamos a procurar buscarlo por su indice
 * Dentro de los corchetes se especifica el indice
 * 
 */
// Mandamos a llamar a un elemento
console.log(numeros[1]);