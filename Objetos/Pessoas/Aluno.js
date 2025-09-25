import PF from './PF.js';
import Disciplina from './Disciplina.js'


class Aluno extends PF {
  
  #matricula;
  #curso;
  #disciplina;

  setMatricula(matricula) {
    if (matricula && matricula.length === 8 && matricula.startsWith("20")) {
      this.#matricula = matricula;
      return true;
    }
    return false;
  }

  getMatricula() {
    return this.#matricula;
  }

  setCurso(curso) {
    if (curso && (curso === 'ADS' || curso === 'SI')) {
      this.#curso = curso;
      return true;
    }
    return false;
  }

  getCurso() {
    return this.#curso;
  }

  setDisciplina(disciplina) {
    this.#disciplina = disciplina;
  }

  getDisciplina() {
    return this.#disciplina;
  }
}

export default Aluno;

// Teste

//const w = new Aluno();

//let resposta = w.setNome('Fabíula');
//console.log(resposta ? w.getNome() : "Nome vazio");

//resposta = w.setMatricula('20123456');
//console.log(resposta ? w.getMatricula() : "Matrícula Inválida");

//resposta = w.setCurso('SI');
//console.log(resposta ? w.getCurso() : "Curso Inválido");

//const disciplina = new Disciplina();
//disciplina.setNome('Front-End');

//w.setDisciplina(disciplina);
//console.log(w.getDisciplina().getNome());