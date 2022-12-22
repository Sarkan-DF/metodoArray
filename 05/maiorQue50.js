let listaNumeros = [ -31, 18, 50, 98, 4, -53, 1, -8, 15, 89, 24, -3, 0, 10, 15, 47, 50, 15, 1, 4 ]

// 5 - Escreva um algoritmo para informar se existe algum número maior que 50 na lista

const maiorQueCinquenta = listaNumeros.some( (valor, indice, array) => valor > 50 );
console.log(maiorQueCinquenta);