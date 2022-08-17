let pergunta = prompt('Quer comer mais coxinha S/N?').toUpperCase()
let conta = 0

while(pergunta == 'S'){
    conta =conta + 2.50;
    pergunta = prompt('Quer comer mais coxinha S/N?').toUpperCase()


}
console.log(`Valor da conta: ${conta}`);