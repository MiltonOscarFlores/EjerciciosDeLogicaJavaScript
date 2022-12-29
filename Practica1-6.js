'use strict'

/* 6- Ingresar dos valores, calcular su suma, su producto y la resta 
del 1ro menos el 2do valor ingresado, imprimir los resultados */

const valor1 = Number(prompt(`Ingresa EL PRIMER VALOR`))
const valor2 = Number(prompt(`Ingresa EL SEGUNDO VALOR`))

const suma = valor1 + valor2
const producto = valor1 * valor2
const resta = valor1 - valor2;

console.log(`La suma de ${valor1} y ${valor2} es ${suma}`);
console.log(`El producto entre ${valor1} y ${valor2} es ${producto}`);
console.log(`La resta entre ${valor1} y ${valor2} es ${resta}`);

console.log(typeof resta);