//////////////////////////////////////////////////////////////////////////////////////

// function Par_Impar(numero) {
//     if (numero % 2 === 0) {
//         return "O número " + numero + " é par.";
//     } else {
//         return "O número " + numero + " é ímpar.";
//     }
// }
// let numero = parseInt(prompt("Digite um número:"));
// console.log(Par_Impar(numero));

//////////////////////////////////////////////////////////////////////////////////////

// function convite(){
//     let nome = prompt('Digite seu nome: ')
//     return document.write(`Olá ${nome}, te convido para o casamento de Rafael e Renata!`)
// }
// convite()

//////////////////////////////////////////////////////////////////////////////////////

// document.write("Números pares de 1 a 10: ");

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     document.write(i + " ");
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////

// //Arrow Function
// const exercicios =  (array)=>{
//   let soma = 0
//   for (let numero of array) {
//     soma += numero;
//   }
//   let media = soma/array.length;
//   return media;
// }

//////////////////////////////////////////////////////////////////////////////////////

// let arrayNumeros = [10,20,30,40,50];

// console.log(exercicios(arrayNumeros));

//////////////////////////////////////////////////////////////////////////////////////

// //Funções de callback

// function adicao = (numero1, numero2, Funcao_anonima) => {
//   let resultado = numero1 + numero2;
//   Funcao_anonima(resultado);
// }

// adicao(5, 9, resultado => 
// console.log("O resultado da adição é:", resultado));

//////////////////////////////////////////////////////////////////////////////////////

// // Laço while

// let totalRuins = 0;
// let contador = 1
// while (contador <= 4){
//  let resposta =  prompt("Qual a sua avalição para a serie stranger things? (bom), (ruim) ou (exelente)")
//  if(resposta == "ruim"){
//     totalRuins++;
//   }

//   contador++;
// }

// console.log(`Total de usuários que avaliaram a série como ruim: ${totalRuins}`);

// //Laço for

// for (let x = 0; x <= 10; x++){
//   let resultado = 5 * x;
//   console.log(`5 x ${x} = ${resultado}`);
// }

//////////////////////////////////////////////////////////////////////////////////////

// Exercicio 7 

// const produtos = {
//     Hortifruti: 0,
//     Laticínios: 0,
//     Carnes: 0,
//     Peixes: 0,
//     Aves: 0
// };

// function produtodesejado() {
//     let resposta;
//     while (true) {
//         resposta = prompt(
//             "Qual produto você deseja comprar?\n" +
//             "(1) Hortifruti\n" +
//             "(2) Laticínios\n" +
//             "(3) Carnes\n" +
//             "(4) Peixes\n" +
//             "(5) Aves\n" +
//             "(6) Fechar pedido"
//         );

//         if (resposta >= "1" && resposta <= "6") {
//             if (resposta === "6") {
//                 finalizarPedido();
//                 break;
//             } else {
//                 perguntarQuantidade(obterNomeProduto(resposta));
//             }
//         } else {
//             alert("Opção inválida. Por favor, escolha uma das opções numeradas.");
//         }
//     }
// }

// function obterNomeProduto(codigo) {
//     switch (codigo) {
//         case "1":
//             return "Hortifruti";
//         case "2":
//             return "Laticínios";
//         case "3":
//             return "Carnes";
//         case "4":
//             return "Peixes";
//         case "5":
//             return "Aves";
//     }
// }

// function perguntarQuantidade(produto) {
//     let quantidade = parseInt(prompt(`Quantos ${produto} você deseja comprar?`));
//     if (!isNaN(quantidade) && quantidade > 0) {
//         produtos[produto] += quantidade;
//     } else {
//         alert("Por favor, insira uma quantidade válida.");
//     }
// }

// function finalizarPedido() {
//     let produtoMaisComprado = Object.keys(produtos).reduce((a, b) => produtos[a] > produtos[b] ? a : b);
//     alert(`O produto mais comprado foi: ${produtoMaisComprado} (${produtos[produtoMaisComprado]} unidades)`);
// }

// produtodesejado();

//////////////////////////////////////////////////////////////////////////////////////


