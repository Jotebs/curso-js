let RandomNum = Math.floor(Math.random() * 11);
let num = document.getElementById('num');
let res = document.getElementById('res');

function adivinhar() {
    if (num.value.length == 0) { //validação para campo vazio
        res.innerHTML = '[ERRO] Por favor, digite um número!';
    }else if(Number(num.value) < 0 || Number(num.value) > 10){ //validação para número fora do intervalo
        res.innerHTML = '[ERRO] Número inválido! Digite um número entre 0 e 10.';
    } else {
        let userNum = Number(num.value); //converte o valor do input para número
        if (userNum == RandomNum){
            res.innerHTML = `Parabéns! Você adivinhou o número ${RandomNum}!`;
            RandomNum = Math.floor(Math.random() * 11); // Gera um novo número aleatório
        } else {
            res.innerHTML = `Errado! O número era ${RandomNum}. Tente novamente.`;
            RandomNum = Math.floor(Math.random() * 11); // Gera um novo número aleatório 
        }
    }
}