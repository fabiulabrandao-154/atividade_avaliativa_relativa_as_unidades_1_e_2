const calculadora = require('../bib/criamodulo.js');
var x = 10, y = 30;
const subtrair = function (x,y) { return x-y}
console.log(subtrair(x,y));
// arrow function
const dividir = (x,y) => { return x/y}
console.log(dividir(x,y));
const multiplicar = (x,y) => { return x*y; }
console.log(multiplicar(x,y));