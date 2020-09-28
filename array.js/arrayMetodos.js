const pilotos = ['Vetter', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)
pilotos.push('Verstappen') // adiciona um elemneto na última posição dentro de um array.
console.log(pilotos)

pilotos.shift()// remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')// adiciona um elemento na primeira posição dentro de um array.
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover 
pilotos.splice(3, 1) // massa saiu !
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Novo array é gerado a partir desse método
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
