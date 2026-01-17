//pedra, papel ou tesoura
let res = document.getElementById('res')    

function jogar(n){
    let aleatorio = Math.floor(Math.random() * 3)

    if(aleatorio == 0){
        res.innerHTML = `O computador escolheu <strong>PEDRA</strong>`
    }else if(aleatorio == 1){
        res.innerHTML = `O computador escolheu <strong>PAPEL</strong>`
    }else{
        res.innerHTML = `O computador escolheu <strong>TESOURA</strong>`
    }
    
    if(n == 0 && aleatorio == 2 || n == 1 && aleatorio == 0 || n == 2 && aleatorio == 1){
        res.innerHTML += `<p>Voce venceu!</p>`
    }else if(n == aleatorio){
        res.innerHTML += `<p>Empatou!</p>`
    }else{
        res.innerHTML += `<p>O computador venceu!</p>`
    }
    

}