// comando que importa as funções somar () e subtrair () para serem reutilizados

const calculadora = require('./bib/criamodulo.js');
var x = 40, y = 80; // usando os últimos valores definidos
console.log(calculadora.somar(x,y));
console.log(calculadora.subtrair(x,y));
console.log(calculadora.multiplicar(x,y));
console.log(calculadora.dividir(x,y)); 