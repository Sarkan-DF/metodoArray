let listaNumeros = [ -31, 18, 50, 98, 4, -53, 1, -8, 15, 89, 24, -3, 0, 10, 15, 47, 50, 15, 1, 4 ]

// 11 - Ordenar a lista de números em ordem crescente (do menor valor ao maior) e mostra-la no console.log

// const ordemCrecente = listaNumeros.sort((a, b) => {
// 	if(a < b){
// 	   return -1;
// 	} else if(a > b){
// 		return 1;
// 	}
// 	return 0;
// })

const ordemCrecente = listaNumeros.sort( (a, b) => a - b );
console.log(ordemCrecente);