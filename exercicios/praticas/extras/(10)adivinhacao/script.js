let res = document.getElementById('res') //variavel da div onde o resultado vai aparecer
let txtnum = document.getElementById('numero') //variavel que recebe o input do número
let tentativas = 0
let numAleatorio = Math.round(Math.random() * 100) //variavel que recebe o número aleatório
let botao = document.getElementById('inicio') //variavel do botão

res.innerHTML = `<p>Estou pensando em um número entre 1 e 100. Tente adivinhar.</p>`

function iniciar(){
    let numero = Number(txtnum.value) //variavel que recebe o número digitado
    if (txtnum.value.length == 0){
        res.innerHTML = '<p>[ERRO] Por favor, digite um número!</p>'; //validação para campo vazio
        return
    }
    if (numero < 1 || numero > 100){
        res.innerHTML = '<p>[ERRO] Número inválido! Digite um número entre 1 e 100.</p>'; //validação para número fora do intervalo
        return
    }
    if (numero < numAleatorio){
        tentativas++
           res.innerHTML = `<p>Que pena, você errou! O número é maior que ${numero}. Tente novamente.(${tentativas} tentativas feitas.)</p>`; //se o núm for menor que o aleatório
        }else if (numero > numAleatorio){
            tentativas++
            res.innerHTML = `<p>Que pena, você errou! O número é menor que ${numero}. Tente novamente.(${tentativas} tentativas feitas)</p>`; //se o núm for maior que o aleatório
        }else{
            tentativas++
            res.innerHTML = `<p>Parabéns! Vocé acertou o número ${numAleatorio} em ${tentativas} tentativas.</p>` //se o núm for igual ao aleatório
            res.innerHTML += `<p>Para começar um novo jogo, clique em "Reiniciar".</p>`
            botao.disabled = true //desabilita o botão pra não adicionar mais tentativas ao contador após o acerto
        }
}

function reiniciar(){ //função para reiniciar o jogo
    let numAleatorio = Math.round(Math.random() * 100) //variavel que recebe o número aleatório(no caso gera um novo numero aleatório)
    res.innerHTML = `<p>Estou pensando em um número entre 1 e 100. Tente adivinhar.</p>`
    tentativas = 0
    txtnum.value = '' 
    botao.disabled = false
}

