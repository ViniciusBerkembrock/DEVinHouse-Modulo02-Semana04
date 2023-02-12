const arr = [1,3,5,7,9,11,13,15]

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(const elemento of arr) {
//     console.log(elemento)
// }

// arr.forEach(Element => {
//     console.log(Element)
// })

const nomes =  [{ nome: 'Luis', idade: 45 }, { nome: 'Karina', idade: 43 }, { nome: 'Pedro', idade: 12 }, { nome: 'João', idade: 6 }]

// for (let i = 0; i < nomes.length; i++){
//     console.log(`Meu nome é: ${nomes[i].nome} e tenho ${nomes[i].idade} anos`);
// }

// for(const elemento of nomes) {
//     console.log(`Meu nome é: ${elemento.nome} e tenho ${elemento.idade} anos`)
// }

// nomes.forEach(function(pessoa) {
//     console.log(`Meu nome é: ${pessoa.nome} e tenho ${pessoa.idade} anos`)
// })

const arrComArr = [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15]]

// arrComArr.forEach(function(arr){
//     arr.forEach(function(numeros){
//         console.log(numeros)
//     })
// })

// arr.forEach(function(elemento, indice) {
//     console.log(`Índice: ${indice}: ${elemento}`)
// })

const numerosMaiores = [10,5,60,3,55,70,21,30]

// let numerosFiltrados = []

// numerosMaiores.forEach(function(elemento) {
//     if(elemento >= 21) {
//         numerosFiltrados.push(elemento)
//     }
// })

// numerosFiltrados = numerosMaiores.filter(numero => numero >= 21)
// console.log(numerosFiltrados)

// let nomesFiltradosPelaIdade = nomes.filter(pessoas => pessoas.idade >= 18)
// console.log(nomesFiltradosPelaIdade)

// const numeroEncontrado = numerosMaiores.find(numero => numero == 70)
// console.log(numeroEncontrado)

// let pessoasFiltradasComFiler = []
// pessoasFiltradasComFilter = nomes.filter(pessoa => pessoa.idade >= 18)
// console.log(pessoasFiltradasComFilter)

// let resultadoImpares = true
// arr.forEach(element => {
//     if (element % 2 == 0) {
//         resultadoImpares = false
//     }
// }
// )
// resultadoImpares = arr.every(numero => numero % 2 != 0)
// console.log(resultadoImpares)

// let temAlgumPar = null

// arr.forEach(Element=>{
//     if(Element % 2 == 0) {
//         temAlgumPar = true
//     } else {
//         temAlgumPar = false
//     }
// })

// // temAlgumPar = arr.some(numero => numero % 2 == 0)
// console.log(temAlgumPar)

// let nomesComApenasNomes = []

// nomes.forEach(Element => 
//     nomesComApenasNomes.push(Element.nome)
// )

// nomesComApenasNomes = nomes.map(pessoas => pessoas.nome)

// console.log(nomesComApenasNomes)

// nomes.map(function(pessoas){
//     console.log(`Meu nome é ${pessoas.nome} e tenho ${pessoas.idade} anos`)
// })

// let somaDasIdadesDasPessoas = 0
// nomes.forEach(pessoas =>
//     somaDasIdadesDasPessoas += pessoas.idade
// )

const numerosParaSomar = [7,9.3,6.8,8,10,3.5]

// let somaDosNumeros = numerosParaSomar.reduce(function(somaDosNumeros, numero){
//     return somaDosNumeros += numero
// }, 0)

// console.log(somaDosNumeros)

