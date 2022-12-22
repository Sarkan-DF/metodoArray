let listaNumeros = [ -31, 18, 50, 98, 4, -53, 1, -8, 15, 89, 24, -3, 0, 10, 15, 47, 50, 15, 1, 4 ]

// 1 - Escreva um algoritmo para buscar apenas os números positivos da lista

const positivo = listaNumeros.filter( (valor, indice, array) => valor >= 0 );
console.log(positivo);