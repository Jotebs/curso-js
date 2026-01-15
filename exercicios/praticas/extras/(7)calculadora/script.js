let display = document.querySelector('.display') //variavel que recebe o display

let numeroAtual = ""; //variavel que armazena o numero
let numeroAnterior = null; //variavel que armazena o numero anterior
let operadorAtual = null; //variavel que armazena o operador

function addNumber(n){
    numeroAtual += n; //adiciona o numero ao numero atual
    display.innerText = numeroAtual;
}

function setOperador(op){
    if(numeroAtual == "") return; //verifica se o numero atual está vazio
    if(operadorAtual !== null) return; //verifica se o operador atual é nulo
    numeroAnterior = Number(numeroAtual); //o numero anterior recebe o valor do numero atual
    operadorAtual = op;
    numeroAtual = ""; //limpa o numero atual
    display.innerText += operadorAtual; //mostra o operador no display
}

function calcular(){
    if(numeroAtual === "" || operadorAtual === null) return; //verifica se o numero atual ou o operador atual é nulo
    let atual = Number(numeroAtual); //o atual recebe o valor do numero atual
    let resultado; //variavel que armazena o resultado

    switch(operadorAtual){ //criei um switch case para cada operador
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
    display.innerText = resultado; //mostra o resultado no display
    numeroAnterior = null; //limpa o numero anterior
    operadorAtual = null; //limpa o operador atual
    numeroAtual = String(resultado); //o numero atual recebe o valor do resultado
}

function limpar(){ //limpa o display e todos os valores inseridos
    numeroAtual = "";
    numeroAnterior = null;
    operadorAtual = null;
    display.innerText = "";
}