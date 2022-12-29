'use strict'

/* 5- El usuario debe poder ingresar los lados de un rectángulo y el programa calcula con 
esos datos la diagonal principal del rectángulo, superficie y perímetro.
 Mostrar al usuario los resultado */

const base = Number(prompt(`Ingresa LA BASE del rectangulo`))
const altura = Number(prompt(`Ingresa LA ALTURA del rectangulo`))

const superficie = base*altura;
const diagonal = Math.sqrt( Math.pow(base,2) + Math.pow(altura,2))
const perimetro = (base+altura) * 2;

console.log(`La superficie es ${superficie}`);
console.log(`La diagonal es ${diagonal}`);
console.log(`El perimetro es ${perimetro}`);