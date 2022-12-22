let listaNumeros = [ -31, 18, 50, 98, 4, -53, 1, -8, 15, 89, 24, -3, 0, 10, 15, 47, 50, 15, 1, 4 ]

// 9 - Escreva um algoritmo para buscar um número na lista que seja maior ou igual a 90

const maiorOuIgualNoventa = listaNumeros.find( (valor, indice, array) => valor >= 90 );
console.log(maiorOuIgualNoventa);