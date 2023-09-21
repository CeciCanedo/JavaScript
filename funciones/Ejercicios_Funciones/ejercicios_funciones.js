/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */


//  Funcion para calcular el perimetro de un circulo
function perimetroCirculo (diametro){
    let perimetro= (diametro*Math.PI);
    return `El perimetro de un circulo con diametro de ` + (diametro) +`cm es de ${perimetro} centimetros`;
}
//Funcion flecha para calcular el perimetro de un circulo
const perimetroCirculoFlecha=(diametro)=> perimetro = (diametro*Math.PI);


//Funcion para calcular el area de un rectangulo
function areaRectangulo(base, altura){
    let areaRectangulo=(base*altura);
    return `El area de un rectangulo con base de ` + base + `cm y altura de ` + (altura) +`cm es de ${areaRectangulo} centimetros`
}
//Funcion flecha para calcular el area de un rectangulo
const areaRectanguloFlecha=(base,altura)=> areaRectangulo=(base*altura);


//Funcion para calcular el cuadrado de un numero
function numeroCuadrado(numero){
    let cuadrado=(Math.pow(numero,2));
    return `El cuadrado de ` + numero + ` es igual a ` + cuadrado;
}
//Funcion flecha para calcular el cuadrado de un numero
const numeroCuadradoFlecha=(numero)=> numeroCuadrado=(Math.pow(numero,2));


//Funcion para convertir grados Celsius a Farenheit
function celsiusFarenheit(temperaturaGradosCelsius){
    let conversion=((temperaturaGradosCelsius*(9/5))+(32));
    return `Una temperatura de `+ temperaturaGradosCelsius + ` es igual a ` + conversion + ` grados Farenheit.`
}
//Funcion flecha para convertir grados Celsius a Farenheit
const celsiusFarenheitFlecha=(tempCelsius) => conversionGrados=((tempCelsius*(9/5))+(32));


//Funcion para calcular el voltaje dadas la corriente y la resistencia
function calculoVoltaje(corriente,resistencia){
    let voltaje=(corriente*resistencia);
    return `El voltaje es igual a ` + voltaje 
}
//Funcion flecha para calcular el voltaje con la corriente y resistencia
const calculoVoltajeFlecha=(corriente,resistencia) => voltajeCalculado=(corriente*resistencia);


//Funcion para calcular el volumen de una esfera
function calculoVolumenEsfera(radio){
    let volumen=((4/3)*(Math.PI)*(Math.pow(radio,3)));
    return `El volumen de una esfera con radio de `+ radio + `cm es igual a ` + volumen + `cm.`;
}

//Funcion flecha para calcular el volumen de una esfera
const volumenEsferaFlecha=(radio)=> calcularVolumen=((4/3)*(Math.PI)*(Math.pow(radio,3)));