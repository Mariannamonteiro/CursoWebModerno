const escola = 'Cod3r'
console.log(escola.charAt(4)) // função que me da letra do índice 4 dentro da string, os índices cimeçam pelo 0.
console.log(escola.charCodeAt(3)) // procura o num na tabela unicode.
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // ele pega do índice que vc escolheu e te mostra para frente.

console.log(escola.substring(0,3)) // nao inclui o indice final 

console.log('Escola '.concat(escola).concat('!'))

console.log('Escola '+ escola + '!') // outra forma de concatenar

console.log(escola.replace(3,'e'))

console.log('Ana,Maria,Pedro'.split(',')) // array é como se fosse um vetor em c#, separa conteúdos da mesma linha.

//string é uma cadeia de caracteres delimitadas or aspas duplas simples e crase

