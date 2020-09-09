for(let i = 0; i < 10; i++) {
    console.log(i)
}
// fora do bloco o 'i' não está mais disponível, pq foi declarada com let que tem escopo de bloco
// ou seja, só está visível dentro do bloco.
console.log('i = ', i)