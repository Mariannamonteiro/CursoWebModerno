//while é mais apropriado para quando vc tem uma quantidade indeterminada de repetições.
function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1)
{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`opção escolhida foi ${opcao}.`)
}
console.log('Até a próxima!')