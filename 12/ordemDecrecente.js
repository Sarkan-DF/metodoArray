let listaNumeros = [ -31, 18, 50, 98, 4, -53, 1, -8, 15, 89, 24, -3, 0, 10, 15, 47, 50, 15, 1, 4 ]

// 12 - Ordenar a lista de números em ordem decrescente (do maior valor ao menor) e mostra-la no console.log

const ordemDecrecente = listaNumeros.sort( (a, b) => a - b )
console.log(ordemDecrecente.reverse())