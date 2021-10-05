var myVariable = 'global';
myOtherVariable = 'global';

function myFunction(){
  myVariable = 'local';
  return myVariable; 
}

function myOtherFunction(){
  myOtherVariable = 'local';
  return myOtherVariable; 
}

// Operadores bit a bit(bitwise)
// console.log('5 | 1:', (5 | 1))
// console.log('5 & 1:', (5 & 1))
// console.log('5 ^ 1:', (5 ^ 1))
// console.log('5 << 1:', (5 << 1))
// console.log('5 >> 1:', (5 >> 1))
// console.log('~ 5:', (~5))

// console.log(myVariable)
// console.log(myFunction())
// console.log(myOtherVariable)
// console.log(myOtherFunction())
// console.log(myOtherVariable)

// console.log('packt' ? true : false)

// Seria o mesmo que NaN == 1
// console.log('packt' == true )

// Seria o mesmo que NaN == 0
// console.log('packt' == false )

