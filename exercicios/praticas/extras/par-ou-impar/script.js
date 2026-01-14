let num = document.getElementById('txtnum')
let res = document.getElementById('res')
let par = document.getElementById('par')
let impar = document.getElementById('impar')

function verificar() {
    if (num.value.length == 0){
        alert('Por favor, insira um número!')
    } else {
        let n = Number(num.value)
        if (n%2 == 0){
            res.innerHTML = `O número ${n} é <strong>PAR</strong>.`
        }else{
            res.innerHTML = `O número ${n} é <strong>ÍMPAR</strong>.`
        }
    }
    txtnum.value = ''
    txtnum.focus()
}