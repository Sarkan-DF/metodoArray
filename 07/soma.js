let listaNumeros = [ -31, 18, 50, 98, 4, -53, 1, -8, 15, 89, 24, -3, 0, 10, 15, 47, 50, 15, 1, 4 ]

// 7 - Escreva um algoritmo para somar todos os números da lista e mostrar o resultado dessa soma

const soma = listaNumeros.reduce( (soma, valor) => soma += valor );
console.log(soma);