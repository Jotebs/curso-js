let res = document.getElementById('res')
let intervalo = null //variavel para armazenar o intervalo
let tempo = 0 //variavel para armazenar o tempo TOTAL

function atualizarDisplay(){
    let segundos = tempo % 60 //segundos é o resto do tempo/60 (ex: se o tempo for 80, 80%60 = 20)
    let minutos = Math.floor((tempo % 3600) / 60) //minutos é o resto/60 do tempo/3600 (ex: se o tempo for 900, 900%3600 = 900/60 = 15)
    let horas = Math.floor(tempo / 3600) //horas é o tempo/3600 (ex: se o tempo for 7200, 7200/3600 = 2)
    if(segundos < 10){
        segundos = `0${segundos}` //se os segundos for menor que 10, adiciona um 0 antes
    }
    if(minutos < 10){
        minutos = `0${minutos}` //se os minutos for menor que 10, adiciona um 0 antes
    }
    res.innerHTML = horas > 0 //se as horas for maior que 0, o res.innerHTML recebe o seguinte
    ? `${horas}:${minutos}:${segundos}` //se for true(maior que 0)
    : `${minutos}:${segundos}` //se for false(igual ou menor que 0)
}

function relogio(){ //function de atualizar o tempo e o display
    tempo++
    atualizarDisplay()
}

function contar(){ //function para iniciar o cronometro
    if(intervalo === null){ 
        intervalo = setInterval(relogio, 1000) //intervalo recebe setInterval(relogio, 100)
    }
}

function pause(){ //function para parar o cronometro
    clearInterval(intervalo)
    intervalo = null
}

function reset(){ //function para zerar o cronometro
    clearInterval(intervalo)
    intervalo = null
    tempo = 0
    res.innerHTML = `${tempo}`
}