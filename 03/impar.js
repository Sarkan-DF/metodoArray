let listaNumeros = [ -31, 18, 50, 98, 4, -53, 1, -8, 15, 89, 24, -3, 0, 10, 15, 47, 50, 15, 1, 4 ]

// 3 - Escreva um algoritmo para buscar apenas os números ímpares (positivos ou negativos) da lista

const impar = listaNumeros.filter( (valor, indice, array) => valor % 2 != 0);
console.log(impar);