// Arquivo usaEndereco, definido na pasta /pessoas/ENDERECO, denominado usaEndereco.mjs
import Endereco from './Endereco.mjs';                     // Importa a classe Endereco de outro módulo ES6

// Função assíncrona que utilizará métodos await internos
async function usaEndereco() {                             
  const end = new Endereco();                              // Instancia a classe Endereco

  try {                                                    // Bloco try para tratamento de exceções
    //Utiliza await para aguardar a finalização da chamada assíncrona
    await end.setCep("72210532");                           // Chama o método assíncrono que consome API ViaCEP

    console.log("✅ Endereço carregado com sucesso:");     //  Mensagem de sucesso no console
    console.log("CEP:", end.getCep());                     // Acessa e imprime o CEP
    console.log("Logradouro:", end.getLogradouro());       
    console.log("Bairro:", end.getBairro());               
    console.log("Cidade:", end.getCidade());               
    console.log("UF:", end.getUf());
    console.log("Região:", end.getRegiao());                       

  } catch (erro) {                                         // Captura qualquer erro que ocorra durante o await
    console.error("❌ Erro ao definir CEP:", erro.message); // Exibe mensagem amigável de erro
  }
}

usaEndereco();                                             // Chama a função assíncrona

