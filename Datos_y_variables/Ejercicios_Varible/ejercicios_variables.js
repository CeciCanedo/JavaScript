/** 
 *  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
 * Imprimir los resultados en pantalla con un console.log()
 */

/** Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
* Pueden variar entre las palabras reservadas var, let y const
*      -number
*      -string
*      -boolean
*/

// VARIABLES DE TIPO NUMBER

const diametroInternoTR= 3.823;
let inyeccionNitrogeno= 15;
let bombeoLodoBpm=1;
let bombeoLodoGpm=42;
const diametroExtTubFlex=2;
let longTubFlex= 5000;
const espesorParteSuperior= 0.222;
const longParteSuperior= 3020;
const espesorParteInferior= 0.204;
const longParteInferior= 1980;
let densidadLodoGcc= 1.03;
const presionInicial=14.7;

// VARIABLES TIPO STRING

let pasoUno= "Calcular la densidad del gas";
let pasoDos= "Calcular el flujo volumetrico del gas";
let pasoTres= "Calcular el flujo volumetrico de la mezcla";
let pasoCuatro= "Calcular la densidad de la mezcla";
let pasoCinco= "Calcular la velocidad anular";
let pasoSeis= "Hallar el numero de Reynolds";
let pasoSiete= "Determinar el factor de friccion";
let pasoOcho= "Calcular la caida de presion por friccion";
let pasoNueve= "Calcular la presion hidrostatica que se ejerce en un punto";
let pasoDiez= "Calcular la presion hidrostatica al final del intervalo";

// VARIABLES TIPO BOOLEAN

var isDiametroPulgadas= true;
var isBombeoConstante= true;
var isEspesorConstante= false;
var isFlujoLaminar= false;
var isFlujoTurbulento= true;
var ismodeloPlasticoBingham= true;
var isInyeccionNitrogeno= true;
var isTemperaturaConstante= false;
var isHorizontal= true;
var isIncrementoConstante= true;

/** Declarar variables numericas y realizar las operaciones aritmeticas basicas
 *      -suma
 *      -resta
 *      -multiplicacion
 *      -division
 */

// MULTIPLICACION
let pseudoGasto= 519.13*inyeccionNitrogeno*bombeoLodoBpm;
// DIVISION
let gradienteSuperficial= pseudoGasto/presionInicial;
// MULTIPLICACION
let flujoVolumetricoGas= gradienteSuperficial*7.48;
// SUMA
let FlujoVolumetricoMezcla= flujoVolumetricoGas+bombeoLodoGpm;
//RESTA
let diametroInteriorSuperior= diametroExtTubFlex-(2*espesorParteSuperior);

/** Declarar variables que concatenen cadenas de texto
 *      -5 mensajes diferentes en pantalla, sin limite de palabras.
 */

let flujoGas='Para '+ pasoTres + ' es necesario ' + pasoDos + 'primero';
let caidaPresionFriccion= 'No podemos ' + pasoOcho + ' sin ' + pasoSeis;
let factorFriccion= 'Al ' + pasoSiete + ' es posible ' + pasoOcho;
let densidadMezcla= 'No es posible ' + pasoCuatro + ' sin ' + pasoUno
let velocidadAnular= 'Es necesario ' + pasoCinco + ' para poder ' + pasoSeis

/** Declarar 5 variables y convertirlas a otro tipo de dato
 */

// De NUMBER a STRING

// De STRING a NUMBER
var nuevaEdadNumber= Number(nuevaEdad);

//