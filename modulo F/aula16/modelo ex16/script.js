let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    // se o Number (n) for  maior ou igual a 1 e  menor ou igual a 100 retorne verdadeiro.
    if (Number(n) >= 1 && Number(n) <=100){
        return true
    }else{ // ou entao retorne falso.
        return false
    }
}
  
function inLista(n,l) {
// se na lista (indexOf) o numero de N for diferente de -1 , indica que o valor nao foi encontrado na lista.
    if(l.indexOf(Number(n)) != -1){
        return true
}else{
    return false
}
    
}


function adicionar() {
    // verific se o numero é valido e se é repitido na lista.
    // (!) = a Não.
    if (isNumero(num.value) && !inLista(num.value, valores )){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
       // res.innerHTML = ''
    }else{
        // senao retorna valor ja encontrado na lista.
        // comando que imprime a msg (WINDOW.ALERT)
        window.alert('Valor invalido ou ja encontrado na lista')
    }
    // zera a caixa de entrada automaticamente
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados.</p>`
    }
    
}
