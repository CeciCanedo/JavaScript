//Comentarios de una sola linea

/**Comentarios de multiples
 * lineas
 */

//Declaracion de variables

/**
 * palabras reservadas: var - let
 * Nombre significativo o que contextualice
 * Operador de aginacion '='
 * asignar un valor
 * ;
 */


alert('stoi bibo')
// Datos primitivos
var varEjemplo= null; //Declaracion de una variable nula
var edadFer= 22; //Variable con valor numerico
var nuevaEdad= "23";
var nombreUsuario= "Ceci"; //Variable con un valor de cadena de texto (string) siempre usar comillas dobles o sencillas "" o ''
var isProgramer= false; //Variable con un valor booleano

let valorNulo= null;
let numeroCohorte= 32;
let contadorUsuarios = 150;
let nombreEquipo= "The codemonkeys";
let correoUsuario= "correo.generico@dominio.com"
let isHumano= false;
let isMarciano= true;

let nuevoArreglo= [1,2,3,4];
let nuevoObjeto= {};

// Datos complejos
/**var listaUsuarios= ["Daniel", "Tania", "Carlos"]; //Variable que almacena un array
var mouseGamer= { //Variables que almacena un objeto
    marca:"razer",
    numeroBotones: 4,
    isInalambrico: false,
    isRgb: true,
}*/

var usuario= {
    ID_USUARIO: "01",
    nombreUsuario: "Nombre",
    apellidoUsuario: "Apellido",
    edadUsuario: 22,
    isVerificado: false,
}

// Declarar constantes

/**
 * 
 * Palabra reservada const
 * UPPER_SNAKE_CASE
 * Operador de asignacion '='
 * 
 */

const NUMERO_PI= 3.141592;

/**
 * 
 * Convertir a otros tipos de datos
 * 
 * Vamos a almacenar dentro de una variable nueva la variable
 * que esperamos cambie su valor
 * 
 * - var, let
 * -asignamos un nombre diferente de la variable original
 * Operador de asignacion '='
 * Constructor: Number, string, Boolean
 * Tenemos que colocar un parentesis ()
 * 
 */

//Convertimos de number a string
let edadFerString= String (edadFer);

//Convertimos de string a number
var nuevaEdadNumber= Number(nuevaEdad);

//Convertir a booleano
let nombreUsuarioBoolean= Boolean(nombreUsuario);

/** Concatenar variables
 * 
 * Para esto basta con utilizar el operador '+'
 * Si son strings, me concatenea en un string
 * Si son numero, me resuelven aritmetica
 * Si son string y numero, se concatena en un string
 */

let adicion= nuevaEdadNumber+contadorUsuarios;

