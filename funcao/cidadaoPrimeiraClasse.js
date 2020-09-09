// Função pode ser passada como parametro ou retornar como resposta 

// declara função de forma literal 
function fun1(){ }

// Armazenar funcao em uma variável
const fun2 = function() { } // funcao anonima(n tem nome)

// Armazenar uma funcao dentro de um array
const array = [function(a, b) {return a + b }]
console.log(array[0](2,3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// passar funcao como parametro 
function run (fun) {
    fun()
}

run(function() { console.log ('Executando ...') })

// ua funcao pode retornar e conter uma outra funcao 
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)