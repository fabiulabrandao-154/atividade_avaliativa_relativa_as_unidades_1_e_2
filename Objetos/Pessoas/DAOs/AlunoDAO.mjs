import { localStorage } from './localStorage.mjs';
import Aluno from '../Aluno.js';

export default class AlunoDAO {
  #aluno;

  constructor(aluno) {
    if (aluno instanceof Aluno) {
      this.#aluno = aluno;
    }
  }

  toJSON() {
    let fones = [];
    if (this.#aluno.getTelefones()) {
      for (let fone of this.#aluno.getTelefones()) {
        fones.push({
          ddd: fone.getDdd(),
          numero: fone.getNumero(),
        });
      }
    }

    return {
      nome: this.#aluno.getNome(),
      email: this.#aluno.getEmail(),
      cpf: this.#aluno.getCPF(),
      matricula: this.#aluno.getMatricula(),
      curso: this.#aluno.getCurso(),
      disciplina: {
        nome: this.#aluno.getDisciplina() ? this.#aluno.getDisciplina().getNome() : null
      },
      endereco: this.#aluno.getEndereco() ? {
        logradouro: this.#aluno.getEndereco().getLogradouro(),
        cep: this.#aluno.getEndereco().getCep(),
      } : null,
      telefones: fones,
    };
  }

  saveJSON() {
    localStorage.setItem("aluno", JSON.stringify(this.toJSON()));
  }

  recoveryJSON() {
    return JSON.parse(localStorage.getItem("aluno"));
  }
}