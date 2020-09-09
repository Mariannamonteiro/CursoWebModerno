// Array aceita múltiplos valores dentro dele, como numeros e strings 
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])
valores[4] = 10 
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // adiciona novos elementos no array
console.log(valores)

console.log(valores.pop()) // ele tira e retorna o ultimo valor do array .
delete valores[0] // também outra forma de tirar um elemnto do array 
console.log(valores)