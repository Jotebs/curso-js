let res = document.getElementById('res')
let txtnum = document.getElementById('numero')
let tentativas = 0
let numAleatorio = Math.round(Math.random() * 100)
let botao = document.getElementById('inicio')

res.innerHTML = `<p>Estou pensando em um número entre 1 e 100. Tente adivinhar.</p>`

function iniciar(){
    let numero = Number(txtnum.value)
    if (txtnum.value.length == 0){
        res.innerHTML = '<p>[ERRO] Por favor, digite um número!</p>';
        return
    }
    if (numero < 1 || numero > 100){
        res.innerHTML = '<p>[ERRO] Número inválido! Digite um número entre 1 e 100.</p>';
        return
    }
    if (numero < numAleatorio){
        tentativas++
           res.innerHTML = `<p>Que pena, você errou! O número é maior que ${numero}. Tente novamente.(${tentativas} tentativas feitas.)</p>`;
        }else if (numero > numAleatorio){
            tentativas++
            res.innerHTML = `<p>Que pena, você errou! O número é menor que ${numero}. Tente novamente.(${tentativas} tentativas feitas)</p>`;
        }else{
            tentativas++
            res.innerHTML = `<p>Parabéns! Vocé acertou o número ${numAleatorio} em ${tentativas} tentativas.</p>`
            res.innerHTML += `<p>Para começar um novo jogo, clique em "Reiniciar".</p>`
            botao.disabled = true
        }
}

function reiniciar(){
    let numAleatorio = Math.round(Math.random() * 100)
    res.innerHTML = `<p>Estou pensando em um número entre 1 e 100. Tente adivinhar.</p>`
    tentativas = 0
    txtnum.value = '' 
    botao.disabled = false
}

