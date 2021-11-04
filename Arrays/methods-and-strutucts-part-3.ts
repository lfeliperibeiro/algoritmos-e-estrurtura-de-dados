// Usando concat para concatenar arrays

const zero = 0;
const positiveNumbers = [1 ,2, 3];
const negativeNumbers = [-3, -2, -1];


let numbers = negativeNumbers.concat(zero,positiveNumbers)

// console.log(numbers)

// Função de interação
// Às vezes, precisamos iterar pelos elementos de um array.

function isEven(x) {
  // devolve true se x for múltiplo de 2.
  console.log(x);
  return x % 2 === 0;
}

// simplificado

const isEvenSimplify = x => x % 2 === 0;


let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// console.log(isEvenSimplify(arrayNumbers))

// Interando com o método every
//o método some itera pelos elementos do array até que a função devolva true:

// console.log(arrayNumbers.every(isEvenSimplify))
// console.log(arrayNumbers.some(isEvenSimplify))

// Se precisarmos fazer a iteração em todo o array,
//  independentemente de tudo mais, podemos usar a função forEach.
//  O resultado será o mesmo que usar um laço for com o código da função dentro dele, assim:

arrayNumbers.forEach(x => console.log(x % 2 === 0))

// Usando map e filter

const myMap = arrayNumbers.map(isEvenSimplify)
// console.log(myMap)

//o método filter, o qual devolve um novo array com os elementos para os quais a função
// devolveu true, assim:

const everyNumber = arrayNumbers.filter(isEven)

// console.log(everyNumber)

// Usando o método reduce

// Por fim, temos o método reduce, que recebe uma função com os seguintes
// parâmetros: previousValue, currentValue, index e array. Os parâmetros index e array são opcionais,
// portanto não é necessário passá-los caso não sejam usados.
// Podemos usar essa função para devolver um valor que será somado a um acumulador,
// o qual será devolvido depois que o método reduce parar de executar.
// Isso pode ser muito útil se quisermos somar todos os valores de um array.

const exemploReduce = arrayNumbers.reduce((previous, current) => previous + current)

console.log(exemploReduce)
