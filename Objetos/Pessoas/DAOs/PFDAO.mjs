import { localStorage } from './localStorage.mjs';
import PF from '../PF.js';

export default class PFDAO {
  #pf;

  constructor(pf) {
    if (pf instanceof PF) {
      this.#pf = pf;
    }
  }

  toJSON() {
    let fones = [];
    if (this.#pf.getTelefones()) {
      for (let fone of this.#pf.getTelefones()) {
        fones.push({
          ddd: fone.getDdd(),
          numero: fone.getNumero(),
        });
      }
    }

    return {
      nome: this.#pf.getNome(),
      email: this.#pf.getEmail(),
      cpf: this.#pf.getCPF(),
      endereco: this.#pf.getEndereco() ? {
        logradouro: this.#pf.getEndereco().getLogradouro(),
        cep: this.#pf.getEndereco().getCep(),
      } : null,
      telefones: fones,
      titulo: this.#pf.getTitulo() ? {
        numero: this.#pf.getTitulo().getNumero(),
        zona: this.#pf.getTitulo().getZona(),
        secao: this.#pf.getTitulo().getSecao(),
      } : null
    };
  }

  saveJSON() {
    localStorage.setItem("pf", JSON.stringify(this.toJSON()));
  }

  recoveryJSON() {
    return JSON.parse(localStorage.getItem("pf"));
  }
}