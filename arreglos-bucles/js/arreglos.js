//Parte 1 arrays 

//Datos primitivos

//Declaracion de un arreglo de numeros
let numeros=[1, 2, 3, 4, 5];

//Declaracion de un arreglo de strings
let textos=["Hola", "saludos", "AFIRMATIVO","cholo"]; 

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
let aleatorio=[1, "hello", true, null, [1,0], {nombre: "Fernando", edad: 22}];

/**
 * Como encontrar un elemento de un arreglo
 * 
 * Vamos a procurar buscarlo por su indice
 * Dentro de los corchetes se especifica el indice
 * 
 */
// Mandamos a llamar a un elemento especifico del arreglo 'numeros' a traves de su indice
let encuentraPrimerElemento= textos[0];
//console.log(textos[0]);

// Mandamos a llamar el ultimo elemento de un arreglo
let encuentraUnElemento= numeros[2];
//console.log(textos[2]); // imprime "Negativo"

//Que pasa si yo no conozco la longitud ni el ultimo elemento de un arreglo?
let encuentraElUltimoElemento= binario[binario.length-1];
//console.log(textos[textos.length-1]); //imprime el ultimo elemento sin especificar su indice

/** Metodos para trabajar con un array 
 * 
 * indexOf(); - Nos indica cual es el indice del elemento seleccionado
 * 
 * Metodos que me permiten agregar elementos
 * unshift(); - Agrega un elemento al inicio de mi arreglo
 * push(); Agrega un elemento al final dentro de mi arreglo
 * 
 * 
 * Metodos que me permiten eliminar elementos
 * shift(); - Elimina el primer elemento del arreglo
 * pop(); - Elimina el ultimo elemento del arreglo
 *
 */

console.log("Indice del elemento: "+textos.indexOf("cholo"));
console.log("Agrega un elemento al arreglo numeros al principio: " + numeros.unshift(0));
console.log("Agrega un elemento al arreglo numeros al final: " + numeros.push(6));

console.log("Elimina el primer elemento del arreglo numeros: " + numeros.shift());
console.log("Elimina el ultimo elemento del arreglo numeros: " + numeros.pop());

/**
 * splice(posicion, elementos); - modifica elementos estableciendo un rango
 * 
 * 
 * 
 */

let palabra =["h","o","l","a"];

//let metodoSplice= palabra.splice(2,3);
//let metodoJoin=palabra.join("");
let metodoForEach=palabra.forEach((elemento)=> console.log(elemento));

/**
 * Ejercicio de reforzamiento - Aplicando conocimientos
 * 
 * Dado un arreglo vacio de nombre 'articulos'
 * 
 * Crea una funcion para agregar un nuevo elemento al arreglo 
 * Consideraciones - Recordar para que sirve unshift() y push()
 * 
 */

let articulo=[];

function agregarArticulo(nuevoArticulo){
    nuevoArticulo= articulo.push(nuevoArticulo);
}


// Parte 2 Loops

/** 
 * Son bloques de codigo que nos van a permitir repetir una misma tarea
 * sin la necesidad de declararla o realizrla manualmente
 * 
 * Sentencia para declarar o establecer un ciclo
 * 
 * Los  mas comunes son:
 * - for
 * - while
 * 
 */

//FOR

/** Bucle for 
 * 
 * palabra reservada for
 * seguido de comenzar la declaracion debemos colocar ()
 * solo falta delimitar que operaciones se vsn a ejecutar
 * 
 */

// inicializacion; condicion; contador

// Tenemos un contador aritmetico que se representa como 
// ++ incremento en una unidad
// -- decremento en una unidad
// +=n itera en intervalos de n en n

for(let x= 0; x<=10; x+=3){
    console.log(x);
}

let boletos= 1;
for(boletos; boletos<= 10; boletos++){
    console.log(`Boleto numero ${boletos}`);
}

let cuentaRegresiva= 10;
for (cuentaRegresiva; cuentaRegresiva>= 1; cuentaRegresiva--){
    console.log(`${cuentaRegresiva} segundos para el año nuevo`)
}

// Como podemos recorrer arrays utilizando un ciclo for?

let participanteCH32=["Ceci", "Albar", "Emmanuel", "Kevin", "Nize", "Paulo", "Johan","Alberto"]
for (let participante=0; participante<participanteCH32.length; participante++){
    console.log(participanteCH32[participante]);
}

//Array en reversa
for (let participante=participanteCH32.length-1; participante>=0; participante--){
    console.log(participanteCH32[participante]);
}

/** Variaciones del ciclo for: 
 * 
 * for...of - Nos permite recorrer un array y por cada uno de los elementos
 * nos devuelve el valor
 * 
 * Sintaxis
 * for(let element of array){
 *      bloque de codigo
 * }
 * 
 * 
 * for...in - Nos permite recorrer un array pero nos devuelve su posicion (indice)
 * 
 * Sintaxis
 * 
 * for (let elemento if array){
 *      bloque de codigo
 * }
 * 
*/

//console.log("--- for...of---");

let animales=["perro", "gato", "caballo", "vaca", "lion", "conejo", "oso", "ornitorrinco"];

for (let animal of animales){
    console.log(animal);
}

//console.log("---for...in---");

for (let animal in animales){
    console.log(animal);
}

//Imprimir los numeros pares del 1 al 20

for (let listaNumeros=1; listaNumeros <=20; listaNumeros++){
    if (listaNumeros % 2 ===0)
    console.log(`los numeros pares de la lista son ${listaNumeros}`);
}
