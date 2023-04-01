//Em JavaScript, o programa para calcular a sequência de Fibonacci e verificar se um número pertence a ela 

let numero = 21; // número a ser verificado
let a = 0;
let b = 1;
let c;

while (a <= numero) {
  if (a === numero) {
    console.log(numero + ' pertence à sequência de Fibonacci');
    break;
  }
  c = a + b;
  a = b;
  b = c;
}

if (a !== numero) {
  console.log(numero + ' não pertence à sequência de Fibonacci');
}
