{
    {
        {
            var sera = 'Será???'
        }
    }
}
console.log(sera)
// mesmo fora do bloco a variável var fica visível 

// quando se define uma variável dentro de uma função ela não estará visível fora, somente dentro do escopo.
//Qnd se cria uma variável fora de uma função, ela é global, fica visível.
function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local) 
