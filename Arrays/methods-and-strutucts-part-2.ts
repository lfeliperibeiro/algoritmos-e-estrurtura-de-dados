// Arrays bidimensionais e multidimensionais

// Vamos usar uma matriz(um array bidimensional ou um array de arrays)

let averageTemp = []
 averageTemp[0] = [72, 75, 79, 81, 81]
 averageTemp[1] = [81, 79, 75, 75, 73, 72]

// Iterando pelos elementos de arrays bidimensiois

// o i reprsenta as linhas e o j as colunas
function printMatrix(myMatrix) {
 for (let i = 0; i < myMatrix.length; i++){
  for(let j = 0; j < myMatrix[i].length; j++){
   console.log(myMatrix[i][j])
  }
 }
}

console.table(averageTemp)

// É possível também trabalhar com arrays multidimensionais em JavaScript.
// Por exemplo, vamos criar uma matriz 3 x 3. Cada célula contém
// a soma i (linha) + j (coluna) + z (profundidade) da matriz, deste modo:

const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
 matrix3x3x3[i] = []; // precisamos inicializar cada array

 for (let j = 0; j < 3; j++) {
  matrix3x3x3[i][j] = [];
  for (let z = 0; z < 3; z++) {
   matrix3x3x3[i][j][z] = i + j + z;
  }
 }
}

for (let i = 0; i < matrix3x3x3.length; i++) {
 for (let j = 0; j < matrix3x3x3[i].length; j++) {
  for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
   console.log(matrix3x3x3[i][j][z]);
  }
 }
}

// Métodos de arrays

// concat Junta vários arrays e devolve uma cópia dos arrays concatenados.

// every Itera por todos os elementos do array, verificando uma condição desejada (função)
// até que false seja devolvido.

// filter Cria um array com todos os elementos avaliados com true pela função especificada.

// forEach Executa uma função específica em cada elemento do array.

// join Reúne todos os elementos do array em uma string.

// indexOf Pesquisa o array em busca de elementos específicos e devolve a sua posição.

// lastIndexOf Devolve a posição do último item do array que corresponda ao critério de pesquisa.

// map Cria outro array a partir de uma função que contém o critério/condição e
// devolve os elementos do array que correspondam ao critério.

// reverse Inverte o array, de modo que o último item se torne o primeiro, primeiro, e vice-versa.

// slice Devolve um novo array a partir do índice especificado.

// some Itera por todos os elementos do array, verificando a condição desejada (função)
// até que true seja devolvido.

// sort Organiza o array em ordem alfabética ou de acordo com a função especificada.

// toString Devolve o array na forma de uma string. valueOf É semelhante ao método toString
// e devolve o array na forma de uma string.


