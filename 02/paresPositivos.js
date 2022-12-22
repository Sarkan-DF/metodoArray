let listaNumeros = [ -31, 18, 50, 98, 4, -53, 1, -8, 15, 89, 24, -3, 0, 10, 15, 47, 50, 15, 1, 4 ]

// 2 - Escreva um algoritmo para buscar apenas os números pares e positivos da lista

const paresPositivos = listaNumeros.filter( (valor, indice, array) => valor >= 0 && valor % 2 === 0);
console.log(paresPositivos);