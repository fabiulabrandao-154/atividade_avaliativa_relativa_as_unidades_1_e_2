//Forma 1:
//console.log('');
var dadosAluno = ['João', 12345, true];
//console.log(dadosAluno);
//console.log(dadosAluno[0]);

//Forma 2:
var curso = [];
curso[0] ='ADS';
curso[1] = 2025;
curso[3] = 'Computação';
//console.log(curso);

//Forma 3:
var notas = new Array (7.5, 8.9);
//console.log(notas);

//Forma 4:
var arrays = [true, false, true];
//console.log(arrays);

//Forma 4.1:
var frutas = []; //Objeto Array - Possui atributos e métodos
frutas.push("maçã"); //adicionar ao final
frutas.push("banana");
frutas.unshift('uva'); //adicionar no início

frutas.pop(); // remove do final
frutas.shift(); // remove do início
frutas.splice(0,1); // retira elemento da posição. Ex: 0

frutas.splice(0,0,"morango"); // adiciona elemento na posição. Ex: 0

//console.log(frutas);
//console.log(frutas.length);

const Aluno = require('./Aluno');

// Criando alunos
const Obj1 = new Aluno();
Obj1.setNome('Pedro');
Obj1.setMatricula('20250001');
console.log(Obj1);

const Obj2 = new Aluno();
Obj2.setNome('Maria');
Obj2.setMatricula('20250002');
console.log(Obj2);

// Criando array de objetos Aluno
var Objetos = [];
Objetos.push(Obj1);
Objetos.push(Obj2);

console.log(Objetos);
console.log(Objetos[0].getNome());

// Exporta a lista de alunos
module.exports = Objetos;