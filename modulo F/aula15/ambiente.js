let num =[5,8,4,7,9]


num.sort()
num.push()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`  oprimeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('o valor não foi encontrado')
}else{
    console.log(` o valor esta na posição ${pos}`)
}
