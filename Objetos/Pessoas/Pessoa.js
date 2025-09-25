// Arquivo criado em projeto no www.stackblitz.com denominado Pessoa.js
// Arquivo criado dentro de uma pasta /Objetos/Pessoas na raiz do projeto
// Objetivo do exemplo: demonstrar conceitos de encapsulamento adicionados de condicionais.
import Endereco from './Endereco.js';
import Telefone from './Telefone.js';

class Pessoa {
#nome;
#email;

// relacionamento N-1 Endereco

#endereco;
setEndereco(endereco){
  if(endereco instanceof Endereco){
    this.#endereco = endereco;
    endereco.addPessoa(this); // Referência Cruzada
    return true;

  }else{
    return false;
  }

}

getEndereco(){
  return this.#endereco;
}

// relacionamento de N - N com Telefone
#telefones = [];
addTelefone(telefone){
  if(telefone instanceof Telefone ){
    this.#telefones.push(telefone);
    telefone.addPessoa(this); // Referência Cruzada
    return true;
  }else{
    return false;
  }
}
getTelefones(){
  return this.#telefones;
}
//=====================================================

setNome(nome){
  if (nome){
    this.#nome = nome;
    return true;
  } else {
    return false;
  }
}
getNome(){
  return this.#nome;
}
setEmail(email){
  if (email){
    this.#email = email;
    return true;
  } else {
    return false;
  }
}
getEmail(){
  return this.#email
 }
}
export default Pessoa;