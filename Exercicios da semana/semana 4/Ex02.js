class Produto {
    nome;
    preco;
    quantidade;

    constructor(Valornome, Valorpreco, Valorquantidade){
      this.nome = Valornome
      this.preco = Valorpreco
      this.quantidade = Valorquantidade
  }
}

let caderno = new Produto("Caneta", 200, 2)
console.log(caderno)