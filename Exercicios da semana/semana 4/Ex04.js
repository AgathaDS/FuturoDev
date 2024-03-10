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

}

const caderno = new Produto("Caderno", 200, 5)
caderno.vender(10)
caderno.Repor(20)
console.log(caderno)

