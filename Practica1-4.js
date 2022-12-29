'use strict'

// 4- Solicitar ingresar dos lados de un triángulo rectángulo y calcular,
//  la hipotenusa, el perímetro, la superficie.
// Imprima los resultados de las operaciones solicitadas.

const side1 = Number(prompt(`Ingresa el primer cateto`))
const side2 = Number(prompt(`Ingresa el segundo cateto`))

const hipotenusa = (side1**2 )+ (side2**2)
const perimetro = side1 + side2 + hipotenusa
const superficie = (side1*side2) / 2

alert( `La hipotenusa del triángulo es: ${hipotenusa}` )
alert( `El Perimetro del triángulo es: ${perimetro}` )
alert( `La superficie del triángulo es: ${superficie}` )
