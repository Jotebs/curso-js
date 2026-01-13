let num = document.getElementById('txtn')
let lista = document.getElementById('sellis')
let item = document.createElement('option')
let valores = [] //vetor para guardar os valores adicionados

function isNumero(n) { //verifica se o numero esta entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){  //verifica se o numero ja esta na lista
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { //se for um numero valido e nao estiver na lista
        valores.push(Number(num.value)) //adiciona o numero na lista
        let item = document.createElement('option') //cria um elemento option
        item.text = `Valor ${num.value} adicionado.` //cria o item da lista
        lista.appendChild(item) //adiciona o item na lista
        res.innerHTML = '' //limpa a res toda vez que um novo numero for adicionado
        /*
        Basicamente, a cada numero valido digitado, um novo elemento vai ser criado
        e adicionado na lista de selecao (select)
        */
    }else{
        alert('Valor inválido ou ja cadastrado na lista')
    }
    num.value = '' 
    num.focus() //o de cima limpa o campo, e esse aqui volta o foco para o campo
}

function finalizar() {
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valores.length
        valores.sort()
        let maior = valores[tot - 1]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){ //verifica cada valor dentro do vetor
            soma += valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}