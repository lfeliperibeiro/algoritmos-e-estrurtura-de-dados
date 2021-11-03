const averageTemp = []

averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
averageTemp[2] = 42.4;
averageTemp[3] = 52;
averageTemp[4] = 60.8;

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', "Sat"];

// console.log(daysOfWeek.length)

for(let i = 0; i < daysOfWeek.length; i++) {
  // console.log(daysOfWeek[i])
}

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 2;

for(let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i -2]
}
for(let i = 1; i < fibonacci.length; i++) {
  // console.log(fibonacci[i])
}

// usando o método push podemos incluir mais um ítem no final do array

let numbers = [0,1,2, 3, 4,5 ,6, 7, 8, 9]
numbers[numbers.length] = 10
numbers.push(11)
// console.log(numbers);
numbers.push(11, 13)
// console.log(numbers)

// Nesse exemplo iremos atribuir um item na primeira posição do array

numbers.unshift(-2)
// console.log(numbers)
numbers.unshift(-4, -3)
// console.log(numbers)

// O método pop remove o último elemento do array

numbers.pop()
console.log(numbers)

// Removendo o array da primeira posição

// for(let i = 0; i < numbers.length; i++ ){
//   console.log(numbers[i] = numbers[i + 1])
// }
// Neste caso estamos reescrevendo o array e o último item será undefined

// podemos usar o método shift

numbers.shift()
console.log(numbers)

// Os métodos shift e unshift permite que um array emule uma estrutura de dados básica de fila(queue)

// Para removermos o array de uma posição específica podemos usar o splice

// O primeiro argumento é o índice a partir do qual queremos remover ou inserir elementos
// O segundo arugumento é a quantidade de elementos que queremos remover, claro que se o número for
// 0 não iremos remover nenhum
// Do terceiro argumento em diante temos os valores que gostaríamos de inserir no array

numbers.splice(5, 3)
console.log(numbers)

// Vamos supor que queremos inserir os números novammente

numbers.splice(5, 0, 3, 4, 5)
console.log(numbers)