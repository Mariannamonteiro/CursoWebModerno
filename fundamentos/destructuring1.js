// Destructuring uma forma simplificada de tirar de dentro de uma estrutura dois atributos 
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro : 'Rua ABC',
        numero: 1000
    }

}

const {nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const{ sobrenome, humor } = pessoa
console.log(sobrenome, humor) // o programa retorna undefined para atributos que não existem

const {endereco: { logradouro, numero, cep}} = pessoa 
console.log(logradouro, numero, cep)

console.log(pessoa)