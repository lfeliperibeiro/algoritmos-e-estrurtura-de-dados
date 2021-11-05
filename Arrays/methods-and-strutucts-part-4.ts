//novos métodos adicionados na ES2015 e na ES2016:

// @@iterator Devolve um objeto iterador que contém os pares chave/valor do array; pode ser
// chamado sincronamente para obter a chave/valor dos elementos do array.

// copyWithin Copia uma sequência de valores do array na posição de um índice de início.

// entries Devolve @@iterator, que contém pares chave/valor.

// includes Devolve true caso um elemento seja encontrado no array, e false caso contrário.
// Foi adicionado na ES2016.

// find Busca um elemento no array, dada uma condição desejada (função de callback),
// e devolve o elemento caso seja encontrado.

// fill Preenche o array com um valor estático.

// from Cria um novo array a partir de um array existente.

// keys Devolve @@iterator, contendo as chaves do array.

// of Cria um novo array a partir dos argumentos passados para o método.

// values Devolve @@iterator, contendo os valores do array.


// laço for of

const numbers = [1,2,3,4,]

// for (const n of numbers) {
//   console.log(n % 2 === 0 ? 'even' : 'old')
// }


// Usando o método @@interator

// let interator = numbers[Symbol.iterator]()
//
// console.log(interator.next().value)
// console.log(interator.next().value)
// console.log(interator.next().value)
// console.log(interator.next().value)
//
// for (const n of interator){
//   console.log(n)
// }

// Métodos entries, keys e values de array

// let aEntries = numbers.entries()
//
// console.log(aEntries.next().value)
// console.log(aEntries.next().value)
// console.log(aEntries.next().value)
//
// for (const n of aEntries){
//   console.log(n)
// }

// const aKeys = numbers.keys()
//
// console.log(aKeys.next())
// console.log(aKeys.next())
// console.log(aKeys.next())
// console.log(aKeys.next())

// const aValues = numbers.values()
//
// console.log(aValues.next())

// Usando o método from

//O método Array.from cria outro array a partir de um array existente.

// let number2 = Array.from(numbers)
//
// let evens = Array.from(numbers, x => (x % 2 == 0))
//
// console.log(number2)
// console.log(evens)

// O método Array.of cria outro array a partir dos argumentos passados para o método.

// let numbers3 = Array.of(1)
// let numbers4 = Array.of(1,2,3,4,5,6)

//Também podemos usar esse método para fazer uma cópia de um array existente. Eis um exemplo:

// let numbersCopy = Array.of(...numbers4)

// console.log(numbers3)
// console.log(numbers4)
// console.log(numbersCopy)

// O método fill preenche o array com um valor. Por exemplo, considere o array a seguir:

// console.log(numbersCopy.fill(0))
// console.log(numbersCopy.fill(2, 1))
// console.log(numbersCopy.fill(1, 3, 5))

// let one = Array(6).fill(1)
//
// console.log(one)