// classe Endereco, definida na pasta /pessoas/ENDERECO, denominada Endereco.mjs
// Objetivo: demonstrar o uso de métodos assíncronos e tratamento de exceções com try/catch ou throw

export default class Endereco {                       // Declaração da classe Endereco com exportação padrão
  #cep;                                               // Atributos privados encapsulados
  #logradouro;                                        
  #bairro;                                            
  #cidade;                                            
  #uf;
  #regiao;                                                

  // Método assíncrono que consome a API ViaCEP para buscar dados de endereço com base no CEP
  async setCep(cep) {                                 
    const url = `https://viacep.com.br/ws/${cep}/json/`;  // Monta a URL da API pública do ViaCEP

    const resposta = await fetch(url);                // Realiza a requisição HTTP de forma assíncrona

    if (!resposta.ok) {                               // Verifica se a resposta não foi bem-sucedida
      throw new Error(`Erro ao buscar CEP: ${resposta.status}`);  // Dispara uma exceção com o status do erro
    }
    const dados = await resposta.json();              // Converte a resposta para objeto JSON

    if (dados.erro) {                                 // Se a API retornar um campo "erro", o CEP não existe
      throw new Error("CEP não encontrado na base do ViaCEP."); // Dispara uma exceção
    }

    // 18 // Se tudo ocorreu bem, preenche os atributos com os dados retornados
    this.#cep = dados.cep;                            
    this.#logradouro = dados.logradouro;              
    this.#bairro = dados.bairro;                      
    this.#cidade = dados.localidade;                  
    this.#uf = dados.uf;
    this.#regiao = dados.regiao;                              
  }

  // 24 // Métodos públicos de acesso (getters)
  getCep() {                                          
    return this.#cep;                                 
  }

  getLogradouro() {                                   
    return this.#logradouro;                          
  }

  getBairro() {                                       
    return this.#bairro;                              
  }

  getCidade() {                                       
    return this.#cidade;                              
  }
  getUf() {                                           
    return this.#uf;                                  
  }
  getRegiao() {                                           
    return this.#regiao;                                  
  }
}
