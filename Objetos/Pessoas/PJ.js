/*
      Operadores de comparação:
      <   : menor que
      >   : maior que
      <=  : menor ou igual que
      >=  : maior ou igual que
    */    
 /*
      Operadores de comparação:
      ==   : igualdade frouxa
      ===  : igualdade estrita
      !=   : diferença frouxa
      !==  : diferença estrita
    */
import Pessoa from './Pessoa.js';
import IE from './IE/IEclss.js';

class PJ extends Pessoa{
  #cnpj;
  #ie;  

  setCNPJ(cnpj){
    if(cnpj){
      if(cnpj.length > 18)
      {return false}
      this.#cnpj = cnpj;
      return true;
    } else {
      return false;
    }
  }
  getCNPJ(){
    return this.#cnpj;
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
      ie.setPJ(this);                   
      return true;
    } else {
      return false;
    }
  }

  getIE() {
    return this.#ie;                  
  }

} 

export default PJ;