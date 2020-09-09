const peso1 = 1.0
//outra forma de criar um número
const peso2 = Number('2.0')
console.log(peso1,peso2)

console.log(Number.isInteger(peso1)) //isInteger confere se o número é inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)
console.log(media.toFixed(2)) // toFixed declara quantas casas quer depois da vírgula 
console.log(media.toString()) // tString transforma em string uma variável tipo Number 
console.log(typeof media)

//number é o tipo do dado
//Number é uma função 