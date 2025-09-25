const PJ = require('../PJ');

//Factory para IE 
//Factory function

function IEfunc() {
  let dados = { numero: null, estado: null, dataRegistro: null, pj: null }; 

  function setNumero(numero) { if (numero) { dados.numero = numero; return true; } return false; } 
  function getNumero() { return dados.numero; } 

  function setEstado(estado) { if (estado) { dados.estado = estado; return true; } return false; } 
  function getEstado() { return dados.estado; } 

  function setDataRegistro(data) { if (data instanceof Date) { dados.dataRegistro = data; return true; } return false; } 
  function getDataRegistro() { return dados.dataRegistro; } 

  function setPJ(pj) { if (pj instanceof PJ || (pj && pj.cnpj)) { dados.pj = pj; return true; } return false; } 
  function getPJ() { return dados.pj; } 

  return { setNumero, getNumero, setEstado, getEstado, setDataRegistro, getDataRegistro, setPJ, getPJ }; 
}

module.exports = IEfunc;