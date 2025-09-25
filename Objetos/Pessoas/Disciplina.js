class Disciplina {
  #nome;
  
  setNome(nome) {
    if (nome) {
      this.#nome = nome;
      return true;
    } else {
      return false;
    }
  }
  
  getNome() {
    return this.#nome;
  }
}

export default Disciplina;