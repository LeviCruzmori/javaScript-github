/*
/// parametro(=0)
function soma(n1=0,n2=0) {

    return n1 + n2
}
console.log(soma(7))

let v = function (x) {
    return x*2
}
console.log(v(5))

/// calcular fatorial
// 5! = 5x4x3x2x1
function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))
*/
/// Recursividade
Function ;(n)=>{
    if (n ==1){
        return 1
    }else{
        return n*fatorial(n-1)

    }
    
}
console.log(fatorial(5))

/*
5! = 5x4x3x2x1
5! = 5!x4!
n! = n x (n-1)!
1! = 1
*/