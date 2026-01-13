let num = document.getElementById('txtn')
let lista = document.getElementById('sellis')
let res = document.getElementById('res')
let valores = []

function isNumero(n) { //verifica se o número está entre 1 e 100
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){ //verifica se o número já está na lista
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) //add o numero na lista
        let item = document.createElement('option') //cria o elemento option
        item.text = `valor ${num.value} adicionado.` //texto do option
        lista.appendChild(item) //add o option na lista
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        valores.sort()
        let maior = valores[valores.length - 1]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
        }
        let media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número é ${maior}</p>`
        res.innerHTML += `<p>O menor número é ${menor}</p>`
        res.innerHTML += `<p>A soma dos números é ${soma}</p>`
        res.innerHTML += `<p>A média dos números é ${media}</p>`
    }
}