// Ordenando strings

let names = ['Ana', 'ana', 'john', 'John']
// console.log(names.sort())

// PS: entender o valor das strings vendo a tabela ASCII

// Para "driblar" isso podemos fazer o seguinte algoritmo

console.log(names.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()){
    return - 1;
  }
  if (a.toLowerCase() > b.toLowerCase()){
    return 1;
  }
  return 0;
}))

// Se quisermos que as letras minúsculas venham antes no array ordenado,
// é preciso usar o método localeCompare:

// O mesmo serve para acentos

console.log(names.sort((a, b) => a.localeCompare(b)))