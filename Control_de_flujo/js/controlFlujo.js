// Estructuras de control de flujo

/**
 * 
 * Bloques de codigo importsntes dentro de la programacion porque de
 * manera general nos permiten ejecutar sentencias o bloques de 
 * codigo estableciendo para ello las condiciones
 * 
 */

/** Declaracion de sentencia if-else
 * 
 * Palabra reservada if 
 * () condiciones - en forma de expresiones logicas true/false
 * { - llave de apertura
 * - llave de cierre } Todo lo que se encuentre dentro del bloque 
 *                     delimitado por llaves se va a ejecutar cuando
 *                     la sentencia SI se cumple
 * Si la sentencia no se cumple debemos escribir inmediatamente despues
 * de la llave de cierre del bloque anterior la palabra reservada "else"
 * { - llave de apertura
 * - llave de cierre}
 * 
 */

let prueba= 6;

// if-else con una expresion logica o condicion sencilla

if(prueba === 5){
    //Bloque de codigo que se va a ejecutar si la condicion se cumple
    console.log("Se cumple");
} else {
    // Bloque de codigo que se ejecuta si la condicion no se cumple
    console.log("No se cumple");
}

// if-else con una expresion logica o condicion con operadores logicos

/** Operadores logicos
 * 
 * AND && Ambas sentencias se tienen que cumplir (true)
 * OR || Una de las dos sentencias se tiene que cumplir (true)
 * NOT ! Cambia el valor booleano
 * 
 */

// Operador logico && AND

if(prueba >3 && prueba <10){
    console.log("sicierto");
} else {
    console.log("nocierto");
}

// Operador logico || OR

if(prueba >5 || prueba < 5){
    console.log("sicierto");
} else {
    console.log("nocierto");
}

// Declarar una sentencia if else anidada

/** 
 * 
 * Dentro de esta sentencia vamos a evaluar si se cumple la primer
 * condicion si no, lee la siguiente sentencia y valora si se cumple o no
 * 
 */

if(prueba=== 1){
    // Ejecuta esta sentencia
    console.log("Sentencia 1")
} else if (prueba === 2){
        // Ejecuta esta sentencia
        console.log("Sentencia 2")
} else if (prueba=== 3){
            // Ejecuta esta sentencia
            console.log("Sentencia 3")
} else {
    //Otra sentencia
    console.log("Sentencia 4")
}

/** Operador ternario
 * 
 * Es una expresion simplificada de una sentencia if-else preferentemente
 * vamos a utilizar el operador ternario para bloques if-else de una sola 
 * y unica sentencia por cuestiones de legibilidad
 * 
 * Declaracion de operador ternario
 * 
 * Palabra reservada let-var-const
 * Asignar un nombre
 * Colocar el operador de asignacion '='
 * Nuestra condicion va despues del operador de asignacion
 * Colocar el caracter '?' que indica donde comienza la bifurcacion o
 * que camino tomar dependiendo de si la sentencia se cumple o no
 * 
 */

let condicion= prueba=== 5 ? "Condicion cumplida":"Condicion no cumplida";

/** Declaracion de sentencia switch 
 * 
 * Es otrea sentencia que funciona que funciona como una condicion
 * La diferencia es que aqui evalua el valor evaluado dentro del parentesis 
 * para posteriormente evaluar si empata con alguno de los casos que yo
 * defina dentro de mi bloque
 * 
 * Declaracion de una sentencia switch
 * 
 * Palabra reservada switch
 * () despues de esta palabra reservada
 * { - llave de apertura
 * - llave de cierre } 
 * Declarar los casos, tantos como sean necesarios con la palabra
 * reservada case "valor"
 * Seguido de esto con ':' indicamos la secuencia de codigo a ejecutar si
 * empata con el resultado
 * Se coloca la palabra break (controlador de estructura que evita la 
 * ejecucion del resto del codigo)
 *  **No olvidar que cuando un valor comparado no empate con alguno de los
 * casos tenemos que colocar la palabra 'default'
 * Arroja un mensaje de que no es compatible
 * 
 */

//Switch con variable de tipo number

switch(prueba){
    case 1:
        console.log("Caso 1")
    break;
    case 2:
        console.log("Caso 2")
    break;
    case 3:
        console.log("Caso 3")
    break;
    case 4:
        console.log("Caso 4")
    break;
    case 5:
        console.log("Caso 5")
    break;
    default:
        console.log("No empata con niguno de los casos")
    break;
}

//Switch con variable de tipo String

let dia="DOMINGO"
// dia=dia.toUpperCase();
// dia=dia.toLowerCase();

// switch(dia){
//     case "lunes":
//         console.log("Primer dia")
//     break;
//     case "martes":
//         console.log("Segundo dia")
//     break;
//     case "miercoles":
//         console.log("Tercer dia")
//     break;
//     case "jueves":
//         console.log("Cuarto dia")
//     break;
//     case "viernes":
//         console.log("Quinto dia")
//     break;
//     case "sabado":
//         console.log("Sexto dia")
//     break;
//     case "domingo":
//         console.log("Septimo dia")
//     break;
//     default:
//         console.log("Ese dia no existe")
//     break;
// }

/** Control de flujo dinamico
 * 
 * Podemos sacar provecho de las funciones, recordando que son bloques
 * de codigo reutilizables que nos permiten realizar una funcion/operacion
 * particular
 * 
 */

function diaDinamico(dia){
    dia=dia.toUpperCase();
    dia=dia.toLowerCase();

switch(dia){
    case "lunes":
        console.log("Primer dia")
    break;
    case "martes":
        console.log("Segundo dia")
    break;
    case "miercoles":
        console.log("Tercer dia")
    break;
    case "jueves":
        console.log("Cuarto dia")
    break;
    case "viernes":
        console.log("Quinto dia")
    break;
    case "sabado":
        console.log("Sexto dia")
    break;
    case "domingo":
        console.log("Septimo dia")
    break;
    default:
        console.log("Ese dia no existe")
    break;    
}
}

function comparacionDinamica(n){
    if(n>10){
        console.log("Verdadero");
    } else {
        console.log("Falso");
    }
}