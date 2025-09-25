// localStorage Simulado. localStorage e sessionStorage não funcionam no Node.js puro, somente através do Browser
// classe construída dentro da pasta "/pessoas/DAOs/PJDAO.mjs"

import { localStorage } from './localStorage.mjs'; 
import PJ from '../PJ.js';                          

export default class PJDAO {                        

  #pj;                                              

  constructor(pj) {                                 
    if (pj instanceof PJ) {                        
      this.#pj = pj;                                
    }
  }

  toJSON() {                                        
    let fones = [];                                 
    for (let fone of this.#pj.getTelefones()) {     
      fones.push({                                  
        ddd: fone.getDdd(),
        numero: fone.getNumero(),
      });
    }

    return {                                      
      nome: this.#pj.getNome(),
      email: this.#pj.getEmail(),
      cnpj: this.#pj.getCNPJ(),
      endereco: {
        logradouro: this.#pj.getEndereco().getLogradouro(),
        cep: this.#pj.getEndereco().getCep(),
      },
      telefone: fones,
      ie: {
        numero: this.#pj.getIE().getNumero(),
        estado: this.#pj.getIE().getEstado(),
        dataRegistro: this.#pj.getIE().getDataRegistro(),
      }
    };
  }

  saveJSON() {          
    localStorage.setItem("pj", JSON.stringify(this.toJSON())); 
  }

  recoveryJSON() {                                 
return JSON.parse(localStorage.getItem("pj"));  
}

}                                               
