const Pessoa = require('./Pessoa.js'); 

const x = new Pessoa( );
let resposta = x.setNome("Fabíula");
console.log(resposta);
if (resposta) {
  console.log(x.getNome());
} else {
  console.log("Nome vazio!!!");
}
resposta = x.setEmail("fabiula@gmail.com");
console.log(resposta);
if (resposta) {
  console.log(x.getEmail());
} else {
  console.log("Email vazio!!!");
}
