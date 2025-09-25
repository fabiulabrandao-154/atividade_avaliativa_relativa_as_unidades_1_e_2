// 01 // Inscrição Estadual - IE
// 02 // clss - Estrutura de Classe
// 03 // classe construída dentro da pasta "/pessoas/IE"

import PJ from '../PJ.js';               //Importa a classe PJ (Pessoa Jurídica)
import PF from '../PF.js';               //Importa a classe PF (Pessoa Física)

class IE {                                 // Declara a classe IE (Inscrição Estadual)
  #numero;                                 // Atributo privado para o número da IE
  #estado;                                 // Atributo privado para o estado da IE
  #dataRegistro;                           //  Atributo privado para a data de registro da IE

  setNumero(numero){                      // Método para atribuir o número da IE
    if(numero){                           // Validação: número não pode ser vazio
      this.#numero = numero;              // Atribuição do valor ao atributo privado
      return true;                        // Retorna sucesso
    }else{                                
      return false;                       //  Retorna falha
    }
  } 
  getNumero(){                            // Retorna o número da IE
    return this.#numero;                  
  }
  setEstado(estado){                      // Método para atribuir o estado
    if(estado){                           // Validação: estado não pode ser vazio
      this.#estado = estado;              
      return true;                        
    }else{                               
      return false;                       
    }
  } 
  getEstado(){                            
    return this.#estado;                  
  }

  setDataRegistro(dataregistro){          // Define a data de registro (sem verificação de tipo aqui)
    if(dataregistro){                     
      this.#dataRegistro = dataregistro;  
      return true;                        
    }else{                                
      return false;                       
    }
  } 
  getDataRegistro(){                      
    return this.#dataRegistro;            
  }

  #pj;                                    //Atributo privado que representa o vínculo com um objeto PJ

  setPJ(pj){                              //Associa um objeto PJ à IE
    if(pj){                               // Validação: objeto não pode ser vazio
      this.#pj = pj;                      
      return true;                        
    }else{                                
      return false;                       
    }
  }
  getPJ(){                                
    return this.#pj;                      // Retorna o objeto PJ associado
  }

  #pf;                                    //Atributo privado que representa o vínculo com um objeto PF

  setPF(pf){                              //Associa um objeto PF à IE
    if(pf){                               // Validação: objeto não pode ser vazio
      this.#pf = pf;                      
      return true;                        
    }else{                                
      return false;                       
    }
  }
  getPF(){                                
    return this.#pf;                      // Retorna o objeto PF associado
  }

} 

export default IE;