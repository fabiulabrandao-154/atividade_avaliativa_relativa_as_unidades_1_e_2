//código construído na pasta "/pessoas/usaPJDAO.mjs"

import PJ from './Pessoas/PJ.js';                      
import PJDAO from './Pessoas/DAOs/PJDAO.mjs';         
import Endereco from './Pessoas/Endereco.js';          
import Telefone from './Pessoas/Telefone.js';          
import IE from './Pessoas/IE/IEclss.js';                

// ========== Criação do objeto PJ ==========

const pj = new PJ();                                   
pj.setNome("Pedro");                                   
pj.setEmail("pedro@ifb.edu.br");                    
pj.setCNPJ("1234567890/0001-99");                      

// ========== Endereço ==========

const end = new Endereco();                            
end.setLogradouro("QNM 40");                           
end.setCep("12345-678");                              
pj.setEndereco(end);                                 

// ========== Telefones ==========

const fone = new Telefone();                           
fone.setDdd("61");                                    
fone.setNumero("99999-8888");                          
pj.addTelefone(fone);                                  

const fone2 = new Telefone();                          
fone2.setDdd("62");                                     
fone2.setNumero("99999-7777");                          
pj.addTelefone(fone2);                                  

// ========== Inscrição Estadual ==========

const ie = new IE();                                    
ie.setNumero('123456');                                 
ie.setEstado('SP');                                    
ie.setDataRegistro(new Date());                         
pj.setIE(ie);                                          

// ========== DAO: Serialização, Salvamento e Leitura ==========

const pjdao = new PJDAO(pj);
                          
var x = pjdao.toJSON();                                 
pjdao.saveJSON();

console.log("=== DADOS DA PESSOA JURÍDICA ===");
console.log("JSON:", x);                                         
console.log("JSON String:", JSON.stringify(x, null, 2));                        
console.log("Completo:", pjdao.recoveryJSON());

