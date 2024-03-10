class Produto {
    nome;
    preco;
    quantidade;

    constructor(Valornome, Valorpreco, Valorquantidade){
      this.nome = Valornome
      this.preco = Valorpreco
      this.quantidade = Valorquantidade
  }

  vender(quantidadeVendida){
    if(quantidadeVendida > this.quantidade){
        console.log("Estoque insuficiente!")
        console.log(`Existe apenas ${this.quantidade}` )

        return
    } 
    
    this.quantidade -= quantidadeVendida
  }

  Repor(quantidadeReposta){
     this.quantidade += quantidadeReposta
  }

  MostrarEstoque(){
    console.log(`O produto ${this.nome} \n custa R$ ${this.preco} e possui ${this.quantidade} unidades disponíveis`)
  }

  AtualizarPreco(novoValor){
      this.preco = novoValor
  }

}

const caderno = new Produto("Caderno de Friends 200 folhas", 100, 5)
caderno.Repor(20)
caderno.vender(10)
caderno.AtualizarPreco(150)
caderno.MostrarEstoque()

class Pessoa {
    nome;
    idade;
    profissao;

    constructor(nome, idade, profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
}

class Cliente extends Pessoa {
    telefone;
    email;
    clienteDesde;

    constructor(nome, idade, profissao, telefone, email, clienteDesde){
        super(nome, idade, profissao)
        this.telefone = telefone
        this.email = email
        this.clienteDesde = clienteDesde
    }
}

const ClienteÁgatha = new Cliente("Ágatha", 14, "Estudante", "(48)99110-1010", "agthads@gmail.com", "2010-01-11")
console.log(ClienteÁgatha)