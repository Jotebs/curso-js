let nota1 = document.getElementById('n1')
let nota2 = document.getElementById('n2')
let nota3 = document.getElementById('n3')
let nota4 = document.getElementById('n4')
let nota5 = document.getElementById('n5')
let res = document.getElementById('res')
let soma = 0 

function verificar() {
    if(nota1.value.length == 0 || nota2.value.length == 0 || nota3.value.length == 0 || nota4.value.length == 0 || nota5.value.length == 0){
        res.innerHTML = ('Por favor, insira todas as notas!')
    }else{
        soma = Number(nota1.value) + Number(nota2.value) + Number(nota3.value) + Number(nota4.value) + Number(nota5.value)
    let media = soma / 5
    res.innerHTML = `<p>A média é ${media}</p>`
     if (media >=5) {
        res.innerHTML += `O aluno foi <strong>Aprovado</strong>`
    }else{
        res.innerHTML += `O aluno foi <strong>Reprovado</strong>`
    }
    }
}