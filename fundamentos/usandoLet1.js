var numero = 1 
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)

// como dentro do escopo doi declarado um LET, ele não é global.
// o LET da preferencia para pegar o valor da variavel declarada no escopo menor.
// LET tem escopo global, escopo de função e escopo de bloco.
