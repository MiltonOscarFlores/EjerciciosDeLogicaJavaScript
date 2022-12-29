'use strict'

/* 7- Ingresar el valor de la hora y el tiempo trabajado por un comerciante,
 calcular su sueldo e imprimirlo */

const valorHora = Number(prompt(`Ingresa EL VALOR DE CADA HORA`))
const tiempoTrabajado = Number(prompt(`Ingresa LA CANTIDAD DE HORAS TRABAJADAS`))

const sueldo = valorHora * tiempoTrabajado

console.log(`Horas trabajadas: ${tiempoTrabajado}hs. x $${valorHora} la hora.`);
console.log(`Su sueldo es $${sueldo}`);
