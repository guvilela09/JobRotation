//Escreva um programa que inverta os caracteres de um string.
//Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
//Evite usar funções prontas, como, por exemplo, reverse;

let str = "exemplo";
let reversedStr = "";

for(let i = str.length - 1; i >= 0; i--){
  reversedStr += str[i];
}

console.log(reversedStr); // Output: "olpmexe"
