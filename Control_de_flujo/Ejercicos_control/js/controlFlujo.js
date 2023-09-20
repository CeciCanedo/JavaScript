/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function edadDinamica(edad){
    if(edad >= 18){
        console.log("Felicitaciones! Tienes edad suficiente para votar");
    } else {
        console.log("Lo siento, no tienes edad suficiente para votar");
}
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Colocar calificaciones de manera que vayan del 0 al 10
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

// console.log("Ejercicio 2")

function promedioDinamico(lenguas, fisica, trigonometria, calculoDiferencial){
    if(((lenguas+fisica+trigonometria+calculoDiferencial)/4) >= 7){
        console.log("Aprobado con un promedio de " + ((lenguas+fisica+trigonometria+calculoDiferencial)/4));
    } else {
        console.log("Reprobado con un promedio de " + ((lenguas+fisica+trigonometria+calculoDiferencial)/4));
    }
}
/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function divideDinamico(numeroPrueba){
    if(numeroPrueba %7 === 0 && numeroPrueba %8 === 0 && numeroPrueba != 0){
        console.log("Verdadero");
    } else {
        console.log("Falso");
    }
}

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * Debe recibir como parametro un numero aleatorio
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * Consideracion - Utilizar la estructura if-else
 */

function divisibleDinamico(numeroEvaluado){
    if(numeroEvaluado %4 === 0 && numeroEvaluado %9 === 0 && numeroEvaluado != 0){
        console.log("El numero aleatorio " + numeroEvaluado + " es divisible entre 4 y 9?. Verdadero");
    } else {
        console.log("El numero aleatorio " + numeroEvaluado + " es divisible entre 4 y 9?. Falso");
    }
}

/** Ejercicio 6
 * 
 *  Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function calculadoraDinamica(operacion,num1,num2){
    operacion=operacion.toUpperCase();
    operacion=operacion.toLowerCase();

switch(operacion){
    case "suma":
        console.log("El resultado de sumar " + num1 + " mas " + num2 + " es " + (num1+num2))
    break;
    case "resta":
        console.log("El resultado de restar " + num1 + " menos " + num2 + " es " + (num1-num2))
    break;
    case "multiplicacion":
        console.log("El resultado de multiplicar " + num1 + " por " + num2 + " es " + (num1*num2))
    break;
    case "division":
        console.log("El resultado de dividir " + num1 + " entre " + num2 + " es " + (num1/num2))
    break;
}
}

/** Ejercicio 7
* 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */


function recomendacionDinamica(genero){
    genero=genero.toUpperCase();
    genero=genero.toLowerCase();

switch(genero){
    case "accion":
        console.log("Kill Bill: The Whole Bloody Affair")
    break;
    case "drama":
        console.log("Taxi Driver")
    break;
    case "comedia":
        console.log("Algo pasa con Mary")
    break;
    case "romance":
        console.log("Titanic")
    break;
    case "suspenso":
        console.log("El Resplandor")
    break;
    case "terror":
        console.log("Los ojos sin rostro")
    break; 
}
}

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 */

function operacionCajero(opcion){
    opcion=opcion.toUpperCase();
    opcion=opcion.toLowerCase();

switch(opcion){
    case "retirar dinero":
        console.log("Dinero retirado. No olvide su efectivo.")
    break;
    case "transferencia":
        console.log("Transferencia realziasda con exito! Gracias.")
    break;
    case "deposito":
        console.log("Efectivo depositado. Puede ver el saldo en su app")
    break;
    case "pago de servicios":
        console.log("Servicio pagado con exito. El pago puede tardar hasta 72 horas en reflejarse")
    break;
}
}

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
*/

function conversorDinamico(n, divisa){
    divisa=divisa.toUpperCase();
    divisa=divisa.toLowerCase();
    
switch(divisa){
    case "dolares estadounidenses":
        console.log("La cantidad de " + n + " pesos mexicanos es igual a " + (n*0.059) + " dolares estadounidenses.")
    break;
    case "euros":
        console.log("La cantidad de " + n + " pesos mexicanos es igual a " + (n*0.055) + " euros.")
    break;
    case "yenes japoneses":
        console.log("La cantidad de " + n + " pesos mexicanos es igual a " + (n*8.65) + " yenes japoneses.")
    break;
    case "libra esterlina":
        console.log("La cantidad de " + n + " pesos mexicanos es igual a " + (n*0.047) + " libras esterlinas.")
    break;
    case "franco suizo":
        console.log("La cantidad de " + n + " pesos mexicanos es igual a " + (n*0.053) + " francos suizos.")
    break;
}

/** Ejercicio 10
 * 
 * R* Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

console.log("Ejercicio 10")

function precioDinamico(n, codigo){
    if(n>0 && codigo === "DESCUENTO10"){
        console.log ("Precio del articulo " + n + " Su descuento fue validado, el total de su compra es " + ((n)-(n*.1)));
    } else {
        console.log("Error. El precio del articulo o codigo de descuento es incorrecto")
    }
}
}
