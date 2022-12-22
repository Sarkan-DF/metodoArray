let listaNumeros = [ -31, 18, 50, 98, 4, -53, 1, -8, 15, 89, 24, -3, 0, 10, 15, 47, 50, 15, 1, 4 ]

// 10 - Escreva um algoritmo para percorrer a lista e criar uma nova lista, de mesmo tamanho, com os valores da lista ao quadrado

const quadrado = listaNumeros.map( (valor, indice, array) => valor ** 2 )
console.log(quadrado);