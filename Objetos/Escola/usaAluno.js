import Aluno from './Aluno.js';

// Evite usar acento em nomes de variáveis
const joao = new Aluno();
joao.setMatrícula(12345);
joao.setCurso("Programação de Front-End");
joao.setEscola("IFB");

console.log(joao.getMatrícula()); // 12345
console.log(joao.getCurso());     // Programação de Front-End
console.log(joao.getEscola());    // IFB

// Acessar via getter, pois o campo é privado
console.log(`Escola: ${joao.getEscola()}`);
