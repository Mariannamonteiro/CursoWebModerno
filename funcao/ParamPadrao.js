// estrategia 1 de gerar valor padrao 
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3),soma1(0,0,0)) // zero retorna falso

// estrategia2, 3 e 4 para gerar valor padrao
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments
}