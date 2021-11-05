// Usando o método copyWithin

//O método copyWithin copia uma sequência de valores do array para a posição de um índice de início.

let copyArray = [1,2,3,4,5,6];

// console.log(copyArray.copyWithin(0, 3))
// console.log(copyArray.copyWithin(1, 3, 5))

// Ordenando elementos

let numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(numbers.reverse())
console.log(numbers.sort())
console.log(numbers.sort((a, b ) => a - b))

// Esse código devolverá um número negativo se b for maior que a,
// um número positivo se a for maior que b e 0 (zero) se forem iguais.
// Isso significa que, se um valor negativo for devolvido,
// é sinal de que a é menor que b, o que será usado posteriormente pela função sort
// para organizar os elementos.

// Função sort por baixo dos panos

function compare(a, b) {
  if (a < b) {
    return -1;
  }
if (a > b) {
  return 1;
}
// a deve ser igual a b
return 0;
}
numbers.sort(compare);


const friends = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 },
];

function comparePerson(a, b) {
  if(a.age < b.age) {
    return -1
  }
  if(a.age > b.age) {
    return 1;
  }
  return 0;
}

console.log(friends.sort(comparePerson))
