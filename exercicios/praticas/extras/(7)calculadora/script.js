let display = document.querySelector('.display')

let numeroAtual = "";
let numeroAnterior = null; //ambos aqui recebem null pois no inicio n tem numero anterior, nem operador nem ponto
let operadorAtual = null;
let ponto = null;

function addNumber(n){
    numeroAtual += n; //concatena o n ao numeroAtual
    display.innerText = numeroAtual;
}

function decimal(){
    if (numeroAtual == "" || ponto !== null) return; //se o numero atual for vazio ou se o ponto for diferente de nulo, nao faz nada
    ponto = "notNull"; //o ponto recebe notNull pra não ser adicionado mais de uma vez
    numeroAtual += ".";
    display.innerText += ".";
}

function setOperador(op){
    if (numeroAtual == "" || operadorAtual !== null) return; //se o numero atual estiver vazio ou se o operador atual n for nulo
    numeroAnterior = Number(numeroAtual);
    ponto = null; //o ponto recebe nulo pro segundo valor poder colocar o "."
    operadorAtual = op; //o operador atual recebe o op
    numeroAtual = ""; //o numero atual recebe vazio
    display.innerText += operadorAtual;
}

function calcular() {
    if(numeroAtual === "" || operadorAtual === null) return; //se o numero atual for vazio ou se o operador atual for nulo, nao faz nada
    let atual = Number(numeroAtual); //o atual recebe o numero atual
    let resultado;

    switch(operadorAtual){ //dependendo do operador atual, a variavel resultado recebe o valor da conta abaixo
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
    display.innerText = resultado; //o display recebe o resultado
    numeroAtual = String(resultado); //o numero atual recebe o resultado pro usuario poder mexer no resultado ainda
    numeroAnterior = null;  //esses 3 volta as variáveis pro valor inicial
    operadorAtual = null;
    ponto = null;
}

function limpar(){
    numeroAtual = "";  //aqui volta todas as variáveis e valores iniciais
    numeroAnterior = null;
    operadorAtual = null;
    display.innerText = "";
    ponto = null;
}
