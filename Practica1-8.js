'use strict'

/* 8- Ingresar el tiempo trabajado por un contador y considerando que el valor
 de la hora es de 800 pesos, calcular su sueldo e imprimirlo */

const valorHora = 800
const tiempoTrabajado = Number(prompt(`Ingresa LA CANTIDAD DE HORAS TRABAJADAS`))

const sueldo = valorHora * tiempoTrabajado

console.log(`Horas trabajadas: ${tiempoTrabajado}hs. x $${valorHora} la hora.`);
console.log(`Su sueldo es $${sueldo}`);
