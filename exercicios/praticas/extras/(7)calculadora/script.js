let display = document.querySelector('.display')

let numeroAtual = "";
let numeroAnterior = null;
let operadorAtual = null;

function addNumber(n){
    numeroAtual += n;
    display.innerText = numeroAtual;
}

function setOperador(op){
    if(numeroAtual == "") return;
    if(operadorAtual !== null) return;
    numeroAnterior = Number(numeroAtual);
    operadorAtual = op;
    numeroAtual = "";
    display.innerText += operadorAtual;
}

function calcular(){
    if(numeroAtual === "" || operadorAtual === null) return;
    let atual = Number(numeroAtual);
    let resultado;

    switch(operadorAtual){
        case "+":
            resultado = numeroAnterior + atual;
            break;
        case "-":
            resultado = numeroAnterior - atual;
            break;
        case "x":
            resultado = numeroAnterior * atual;
            break;
        case "÷":
            resultado = numeroAnterior / atual;
            break;
    }
    display.innerText = resultado;
    numeroAnterior = null;
    operadorAtual = null;
    numeroAtual = String(resultado);
}

function limpar(){
    numeroAtual = "";
    numeroAnterior = null;
    operadorAtual = null;
    display.innerText = "";
}