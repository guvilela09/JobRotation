//Em JavaScript, o programa para calcular o menor valor de faturamento, o maior valor de faturamento e o número de dias em que o faturamento foi superior à média mensal 

let faturamentoDiario = [1200, 900, 1500, 800, 1800, 2000, 0, 0, 1300, 1100, 1400, 1000, 1700, 1900, 2500, 2200, 2800, 3000, 2900, 2600, 2400, 2200, 2000, 1800, 1600, 1900, 2100, 2300, 2200, 2400, 2500];

let soma = 0;
let menor = faturamentoDiario[0];
let maior = faturamentoDiario[0];

for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] < menor) {
    menor = faturamentoDiario[i];
  }
  if (faturamentoDiario[i] > maior) {
    maior = faturamentoDiario[i];
  }
  soma += faturamentoDiario[i];
}

let media = soma / (faturamentoDiario.length - 8); // desconsiderando finais de semana e feriados
let acimaMedia = 0;

for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] > media && faturamentoDiario[i] !== 0) {
    acimaMedia++;
  }
}

console.log('Menor faturamento: R$' + menor);
console.log('Maior faturamento: R$' + maior);
console.log('Dias com faturamento acima da média mensal: ' + acimaMedia);
