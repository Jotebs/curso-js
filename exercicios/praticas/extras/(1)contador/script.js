let contador = 0
let res = document.getElementById('res')
let corpo = document.body
corpo.style.background = 'black'

function zero() {
    if (contador == 0) {
        corpo.style.background = 'black'
    }
}

function adicionar() {
    contador++
    res.innerHTML = `<p>Contador: ${contador}</p>`
    if (contador > 0) {
    corpo.style.background = 'blue'  
    }
    zero()
}

function subtrair() {
    contador--
    res.innerHTML = `<p>Contador: ${contador}</p>`
    if (contador < 0) {
    corpo.style.background = 'red'  
    }
    zero()
}

function zerar() {
    contador = 0
    corpo.style.background = 'black'
    res.innerHTML = `<p>Contador: ${contador}</p>`
}