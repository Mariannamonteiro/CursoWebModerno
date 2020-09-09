let dobro = function (a) {
return 2 * a
}

// função arrow sempre é uma função anonima
dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI).toFixed(2))

let ola = function () { 
    return 'Olá'
}

ola = () => {return 'Olá'}
ola = _ => 'Olá' // possui um parametro 
console.log(ola())