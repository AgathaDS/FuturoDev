const prompt = require("prompt-sync")();

let nome = prompt("digite seu nome")

//null
var idade = null;

//undefined
var preco;

// string
var nomeCompleto = "Ágatha Duarte da Silva"
console.log(typeof nomeCompleto)
// tipagem fraca 
nomeCompleto = 15;

//boolean
var altura = 178;
var reservado = false; // true

//object
var aluno = {
    nome: "Ágatha",
    estado: "Floripa"
}

console.log("Olá"+ nome)

