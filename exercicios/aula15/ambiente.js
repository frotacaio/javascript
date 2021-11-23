let num = [2,3,8]
num[3]=6
num.push(2)
console.log(`Tamanho do vetor: ${num.length}`)
console.log(`Ordenaçãos do vetor: ${num.sort()}`)

/*for (let pos = 0; pos < num.length;pos++){
    console.log(num[pos])
}*/
//Simplificando o laço acima
for(let pos in num){
    console.log(num[pos])
}