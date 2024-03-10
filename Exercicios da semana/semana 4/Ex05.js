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
    console.log(`O produto ${this.nome} custa R$ ${this.preco} e possui ${this.quantidade} unidades disponíveis`)
  }

}

const caderno = new Produto("Caderno de Friends 200 folhas", 100, 5)
caderno.Repor(20)
caderno.vender(10)
caderno.MostrarEstoque()
