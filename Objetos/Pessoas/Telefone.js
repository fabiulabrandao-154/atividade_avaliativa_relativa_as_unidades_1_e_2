class Telefone {
  #ddd;
  #número;

  // relacionamento N - N Pessoa
  #pessoas = [];
  addPessoa(pessoa){
    if(pessoa){
      this.#pessoas.push(pessoa);
      return true;

    }else{
      return false;
    }

  }
  getPessoas(){
    return this.#pessoas;
  }

  setDdd(ddd) {
    if (ddd) {
      this.#ddd = ddd;
      return true;
    } else {
      return false;
    }
  }

  getDdd() {
    return this.#ddd;
  }

  setNumero(número) {
    if (número) {
      this.#número = número;
      return true;
    } else {
      return false;
    }
  }

  getNumero() {
    return this.#número;
  }
}

export default Telefone;