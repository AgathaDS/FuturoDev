////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Aula1 Bruno semana 2 

//////Arrays///////////////////////////////////////////////////////////////////////////////////

// let numero = 15;

// let nota1 = 4 
// let nota2 = 9 
// let nota3 = 7 
// let nota4 = 6

// let soma = notas[0] + notas[1] + notas[2] + notas[3]; 

// let media = 0
// let soma = 0
// let notas = [5, 5, 7, 7]; 

// for(let contador = 0; contador < notas.length; contador++){
//     soma = soma + notas[contador]
// }

// media = soma / 4;

// console.log(media)

// if (media >= 7) {
//     console.log("Aluno aprovado!");
// } else {
//     console.log("Aluno reprovado!");
// }


//////Manipulacao de Arrays /////////////////////////////////////////////////////////////////////////////////

// Push adiciona um item ao final do array

// let arrayNomes = ["Ágatha", "Rafael", "Renata"]
// arrayNomes.push ('Bella')
// console.log(arrayNomes)

// Pop remove o último elemento do array

// let arrayNomes = ["Ágatha", "Rafael", "Renata"]
// arrayNomes.pop ()
// console.log(arrayNomes)

// Unshift adiciona um elemento ao início e desloca todos os outros para a direita

// let arrayNomes = ["Ágatha", "Rafael", "Renata"]
// arrayNomes.unshift("Bella")
// console.log(arrayNomes)

// shift remove o primeiro elemento e desloca todos os outros para a esquerda

// let arrayNomes = ["Ágatha", "Rafael", "Renata"]
// arrayNomes.shift()
// console.log(arrayNomes)

// splice adiciona ou remove elementos em uma posição específica

// let arrayNomes = ["Ágatha", "Rafael", "Renata", "Bella", "Julie"]
// arrayNomes.splice(1, 2)
// console.log(arrayNomes)

// slice retorna uma cópia de uma parte do array, especificada pelos índices de início e fim

// let arrayNomes = ["Ágatha", "Rafael", "Renata", "Bella", "Julie"]
// arrayNomes.slice(1, 2)
// console.log(arrayNomes)

// join converte um array em uma string, unindo todos os elementos do array com um separador especificado

// let arrayNomes = ["Ágatha", "Rafael", "Renata", "Bella", "Julie"]
// console.log(arrayNomes.join(" "))

// Map iterar um array, ou seja, passar por cada um dos dados que estão armazenados.

// let numeros = [5, 2, 10]

// numeros.map(index => {
//     console.log("O número é ", index)
// })

// function leitor(numero){
//     console.log("número é ", numero)
// }

// Uma outra utilidade para o map é criar cópias de um array. Você pode por exemplo criar um novo array com o dobro de cada número do array principal. Obs: o array principal não sofre alteração.

// let numeros = [5, 2, 10]

// let dobro = numeros.map(n => {
//   return n * 2
// })

// console.log(dobro) 

// map - exemplo prático

// const listaPessoas = [
//     {nome: "Ana", idade: 24},
//     {nome: "Bento", idade: 21},
//     {nome: "Leonardo", idade: 28},
//   ]

//   const novaListaPessoas = listaPessoas.map(pessoaAtual => {
//     let dataAtual = new Date();
  
//     let pessoa = {
//       nome: pessoaAtual.nome,
//       anoNascimento: dataAtual.getFullYear() - pessoaAtual.idade
//     }
  
//     return pessoa
//   })
  
//   console.log(novaListaPessoas)

//  Filter podemos filtrar um array. O método filter também cria um novo array através de uma condição, que se verdadeira o elemento verificado é adicionado ao novo array.

// let numeros = [5, 2, 3, 10]

// let pares = numeros.filter(n => {
//   return n % 2 == 0
// })

// console.log(pares)

// podemos verificar um ou mais atributos específicos. Podemos usar ainda operadores lógicos (&&, || e !)

// let pessoas1 = [
//     {nome: "Ana", idade: 24},
//     {nome: "Bento", idade: 17},
//     {nome: "Leonardo", idade: 22},
//   ]
  
//   let pessoas2 = pessoas1.filter(pessoa => pessoa.idade > 18 && pessoa.idade <= 22)
  
//   pessoas2.map(pessoa => {
//     console.log(`${pessoa.nome} - Idade: ${pessoa.idade}`)
//   })

  // Dado o array de pessoas abaixo, crie um novo array com as pessoas que tenham mais de 18 anos e que tenham a letra “A” em seu nome.

//   let pessoas1 = [
//     {nome: "Ana", idade: 24},
//     {nome: "Bento", idade: 17},
//     {nome: "Leonardo", idade: 22},
//   ]
  
//   let pessoas2 = pessoas1.filter(pessoa => pessoa.idade > 18 && pessoa.nome.includes("A"))
  
//   pessoas2.map(pessoa => {
//     console.log(`${pessoa.nome} - Idade: ${pessoa.idade}`) // Ana - Idade: 24
//   })

//////Objetos simples///////////////////////////////////////////////////////////////////////////

// const usuario = {
//     nome: "Ágatha",
//     idade: 14,
//     CPF: "450-897-231-20",
//     senha: "123",
//     Gmail: "agathaduartesilva@gmail.com",
//     CEP: "3348-293",
//     setora: 1,
//     dataNascimento:Date.parse("2010-01-11")
// }

// usuario.nome = "Duarte"

// console.log(usuario.dataNascimento)

//////Exercicios semana 2///////////////////////////////////////////////////////////////////////////

// Exercicio 1 e 2

// const prompt = require('prompt-sync')();

// const frutas = ["Amora", "Morango", "Limão"];

// frutas.push("Goiaba");

// frutas.shift();

// console.log(frutas);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Aula2 Bruno semana 2 

////////Array-map//////////////////////////////////////////////////////////////////////

// const numeros = [10, 2, 3, 5]

// // numeros.map((numeroAtual) => {
// //   console.log("O número atual é", numeroAtual)
// // })

// // const copia = numeros.map((numeroAtual) => {
// // return numeroAtual * 2
// // })

// // retorno implicito
// const copia = numeros.map((numeroAtual) => numeroAtual * 2)
  
// console.log(copia)
// console.log(numeros)

////////Array-filter//////////////////////////////////////////////////////////////////////

// const numeros = [10, 2, 3, 5]

//  const copia = numeros.filter((numeroAtual) => {
//   if(numeroAtual >= 5){
//     return true
//   }
//  })

//  console.log(copia)

// const nomes = ['Leiliane', 'Edson', 'Geovanna', 'Douglas']

// //filtre somente os nomes que tem a letra E

// const copia = nomes.filter(nome => {
//   if(nome.toLowerCase().includes('e')){
//     return true
//   }
// })
 
// console.log(copia)

////////Array-reduce//////////////////////////////////////////////////////////////////////

// const numeros = [10, 5, 2, 3, 10, 45]

// // realize a soma acima 

// const resultado = numeros
// .reduce((soma, numeroAtual) => {
// return soma + numeroAtual
// }, 0)

// console.log(resultado)

 ////////destruction//////////////////////////////////////////////////////////////////////

// const Aluno = {
//       nome: "Ágatha",
//       Email: "agathaduartesilva@gmail.com",
//       Turma: "Nature"
// }

//   console.log(Aluno.nome)

//   let {nome} = Aluno

//   console.log(nome)

// const nomes = ["Ágatha", "Renata", "Rafael"]

// let [primeiro, segundo, terceiro] = nomes

// console.log(segundo)

 ////////spread//////////////////////////////////////////////////////////////////////

//  const Aluno = {
//         nome: "Ágatha",
//         Email: "agathaduartesilva@gmail.com",
//         Turma: "Nature"
//   }

//   const aluno2 = {...Aluno}

//   aluno2.nome = "Bella"

//   console.log(Aluno)
//   console.log(aluno2)






