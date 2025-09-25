const Pessoa = require('./Pessoa.js'); // importei a classe

const João = new Pessoa("João da Silva",80, 1.80);
console.log(João.imc());
console.log(João.peso);

const Maria = new Pessoa();
Maria.peso = 90;
Maria.altura = 1.60;
console.log(Maria.imc());