class Titulo {
  #numero;
  #zona;
  #secao;
  #pf; // Relacionamento 1 para 1 com a classe PF

  setNumero(numero) {
    if (numero) {
      this.#numero = numero;
      return true;
    } else {
      return false;
    }
  }
  getNumero() {
    return this.#numero;
  }
  setZona(zona) {
    if (zona) {
      this.#zona = zona;
      return true;
    } else {
      return false;
    }
  }
  getZona() {
    return this.#zona;
  }
  setSecao(secao) {
    if (secao) {
      this.#secao = secao;
      return true;
    } else {
      return false;
    }
  }
  getSecao() {
    return this.#secao;
  }

  setPF(pf) {
    if (pf) {
      this.#pf = pf;
      return true;
    } else {
      return false;
    }
  }
  
  getPF() {
    return this.#pf;
  }
}

export default Titulo;