// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456 -> {...}
// não pode atribuir novamento um outro obj a uma constante
//pessoa = { nome: 'Ana'}

// congelar o objeto pessoa ou seja não consegue mais mexer nele
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome)