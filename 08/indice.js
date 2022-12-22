let listaNumeros = [ -31, 18, 50, 98, 4, -53, 1, -8, 15, 89, 24, -3, 0, 10, 15, 47, 50, 15, 1, 4 ]

// 8 - Escreva um algoritmo para buscar o índice do número 24

const indice = listaNumeros.findIndex( (valor, indice, array) => valor === 24 );
console.log(indice);