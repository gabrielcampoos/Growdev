let valorDesejado = Number(prompt(`Qual o valor do saque?`));
let cont50 = 0;
let cont10 = 0;
let cont5 = 0;
let cont1 = 0;

while(valorDesejado >= 50){
    valorDesejado -= 50;
    cont50++;
    // console.log(`Resto ${valorDesejado}, ${cont50} notas de 50.`);
};
console.log(`Resto ${valorDesejado}, ${cont50} notas de 50.`);

while(valorDesejado >= 10) {
    valorDesejado -= 10;
    cont10++;
    // console.log(`Resto ${valorDesejado}, ${cont10} notas de 10.`);
};
console.log(`Resto ${valorDesejado}, ${cont10} notas de 10.`);

while(valorDesejado >= 5) {
    valorDesejado -= 5;
    cont5++;
    // console.log(`Resto ${valorDesejado}, ${cont5} notas de 5.`);
};
console.log(`Resto ${valorDesejado}, ${cont5} notas de 5.`);

while(valorDesejado >= 1) {
    valorDesejado -= 1;
    cont1++;
    // console.log(`Resto ${valorDesejado}, ${cont1} notas de 1.`);
};
console.log(`Resto ${valorDesejado}, ${cont1} notas de 1.`);