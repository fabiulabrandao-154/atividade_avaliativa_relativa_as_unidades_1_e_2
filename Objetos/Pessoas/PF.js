// Arquivo criado em projeto no www.stackblitz.com denominado PF.js (Pessoa Física)
// Arquivo criado dentro de uma pasta /Objetos/Pessoas na raiz do projeto
// Objetivo do exemplo: demonstrar conceitos de Herança, bem como encapsulamento adicionados de condicionais.
//Objetivo do exemplo: demonstrar conceitos de Herança, encapsulamentos e relacionamentos 1 - 1 com a classe Titulo

import Pessoa from './Pessoa.js';
import Titulo from './Titulo.js';
import IE from './IE/IEclss.js';

class PF extends Pessoa {
  
  #cpf;
  #ie;
  #titulo; // relacionamento 1-1

  setCPF(cpf) {
    if (cpf) {
      if(cpf.length > 14)
      {return false}
      this.#cpf = cpf;
      return true;
    } else {
      return false;
    }
  }
  getCPF() {
    return this.#cpf;
  }
  setEmail(email) { // sobrescrita de métodos
    // Verifica se o email não está vazio e se contém o '@'
    if (email !== '' && email.includes('@')) {
      super.setEmail(email);
      return true;
    }
    return false;
  }

  setIE(ie) {
    if (ie instanceof IE) {             
      this.#ie = ie;
      ie.setPF(this);                   
      return true;
    } else {
      return false;
    }
  }

  getIE() {
    return this.#ie;                  
  }

  setTitulo(titulo) {
    // Verifica se o objeto é instância da classe Titulo
    if (titulo instanceof Titulo) {
      this.#titulo = titulo;

      // Mantém a referência cruzada
      titulo.setPF(this);

      return true;
    } else {
      return false;
    }
  }

  getTitulo() {
    return this.#titulo;
  }
}

export default PF;