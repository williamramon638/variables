//#1: Escribe un programa que pida un número entero, y conteste al usuario:  “Has introducido el número (x), gracias”.

/*
    var numero;
    var validacion;
    validacion=false;

    while (validacion== false){
        numero = prompt ("ingrese numero entero");
        validacion = /^-?\d+$/.test(numero)
        if (validacion) {
            // es número entero
            console.log(`Has introducido el número : ${numero} ,gracias`);
            } else{ 
            //No es número entero
            console.log(`El valor ingresado : ${numero} no es un entero, ingreselo de nuevo`);
            }
    }
*/

//#2 Escribe un programa que pregunte el precio, el tanto por ciento de descuento, y te diga el precio con descuento. Por ejemplo, si el precio que introduce el usuario es 300 y el descuento 20, el programa dirá que el precio final con descuento es de 240. 
/*
    var precio;
    var descuento;
    var valor_descuento;

    precio = prompt ("¿Cual es el precio?");
    descuento = prompt ("¿Cual es el descuento?");
    precio = Number(precio);
    descuento = Number(descuento);

    valor_descuento = (precio-(precio*descuento/100));
    console.log(valor_descuento);
*/
// #3 Suponiendo que 1 euro = 1.33250 dólares. Escribe un programa que pida al usuario un número de dólares y calcule el cambio en euros. 
/*
var euro=1.33250;
var dolar;
var rta;

dolar = prompt ("Digite un valor en dolares");
dolar = Number(dolar);
total = dolar*euro;

console.log(`${dolar} dolares equivale a ${total} euros`);
*/

// #4 Escribir un programa que pida por teclado cuatro números y calcule y presente la media de los cuatro. 
/*
var num1;
var num2;
var num3;
var num4;
var media;

num1 = prompt ("Digite el primer numero");
num1 = Number(num1);
num2 = prompt ("Digite el segundo numero");
num2 = Number(num2);
num3 = prompt ("Digite el tercer numero");
num3 = Number(num3);
num4 = prompt ("Digite el cuarto numero");
num4 = Number(num4);

media = (num1+num2+num3+num4) / 4;

console.log(`La media de los numeros ${num1} + ${num2} + ${num3} + ${num4} es: ${media}`);
*/

// #5 Escribir un programa que pida por teclado dos resistencias y calcule y presente la resistencia equivalente en paralelo (Req=(R1*R2)/(R1+R2)). 
/*
var r1;
var r2;
var res_equiv;

r1 = prompt ("Digite el valor para la resistencia uno");
r1 = Number(r1);
r2 = prompt ("Digite el valor para la resistencia dos");
r2 = Number(r2);

res_equiv = (r1*r2)/(r1+r2);
console.log( `El valor de la resistencia equivalente es: ${res_equiv}`);
*/

// #6 ¿Cuál es la diferencia entre una variable y una constante?

//Una variable es un elemento en programación en la que el valor se puede modificar en la ejecución del código una constante en otro sentido, su valor queda fijo sin posibilidad de alterarse en la ejecución del código salvo de manera manual.

// #7 ¿Cuándo se deberían usar ? una variable para elementos que se van a estar modificando o que cuyo valor puede variar por ejemplo, la edad de una persona, el procentaje de descuento en productos hogar, una constante, por lo contrario permanece un valor inmutable y que no es necesario mudar, por ejemplo, el valor de euler.