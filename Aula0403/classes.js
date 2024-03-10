// class Carro {
//     modelo
//     marca
//     cor
//     // valor
//     // anoFabricacao
//     // placa

//     acelerar(){
//         console.log("O carro está acelerando!")
//     }

//     alterarCor(novaCor){
//         this.cor = novaCor
//     }

//     descreverCarro(){
//         console.log(this)
//     }
// }

// let carro = new Carro()
// Carro.cor = "branca"
// carro.acelerar()
// carro.alterarCor("Prata")
// carro.descreverCarro()

// console.log(Carro)

class ContaBancaria {
  // atributo privado
  _saldo = 0; // Adicionei a inicialização do saldo
  
  /**
   * os atributos privados só devem ser acessados de
   * dentro da minha classe.
   * 
   * o _ antes do nome é uma convenção entre os programadores
   * javascript.
   */
  nomeTitular;
  agencia;
  conta;
  banco;

  constructor(nomeTitular, agencia, conta, banco = 'Bradesco'){
    this.nomeTitular = nomeTitular;
    this.agencia = agencia;
    this.conta = conta;
    this.banco = banco;
  }

  depositar(valor){
    // this.saldo = this.saldo + valor
    this._saldo += valor;
    console.log("Saldo atualizado");

  }

  sacar(valor){
    if(valor > this._saldo){
      console.log("Saldo insuficiente!");
      return;
    }

    // this.saldo = this.saldo - valor
    this._saldo -= valor;
  }

  transferir(){

  }

  exibirSaldo(){
    console.log(`A conta do(a) titular ${this.nomeTitular} possui R$ ${this._saldo} em saldo.`);
  }
}

class contaPoupanca extends ContaBancaria{
  tipo = 'poupanca'
  taxa = 1;
  descontoEmprestimo;
  rendimento;

  constructor(
    nomeTitular,
    agencia,
    conta,
    descontoEmprestimo, 
    rendimento,
    ){
    this.descontoEmprestimo = descontoEmprestimo
    this.rendimento = rendimento
  }
}

class contaCorrente extends ContaBancaria{
  tipo = 'corrente';
  taxa = 2;
}

let conta1 = new ContaBancaria("Bruno", 1234, 123456);
conta1.depositar(1000);
conta1.exibirSaldo();
conta1.sacar(1500);
conta1.exibirSaldo();
conta1.exibirSaldo();
