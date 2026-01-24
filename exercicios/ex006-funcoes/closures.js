/*
function externo(){
    let message = 'Olá, eu sou uma closure!';

    function interno(){
        console.log(message);
    }
    interno(); // Chamando a função interna
}
externo();
*/


/*
function criarContador(){
    let contador = 0;

    function incrementar(){
        contador++;
        console.log(`Contador: ${contador}. Incrementando...`);
    }

    function contar(){
        return contador;
    }

    return{incrementar, contar};
}

const contador1 = criarContador();


contador1.incrementar();
contador1.incrementar();
contador1.incrementar();
contador1.incrementar();
console.log(`Valor atual do contador: ${contador1.contar()}`);    
*/

let placar = 0;

function criarJogo(){
    function aumentarPlacar(pontos){
        placar += pontos;
        console.log(`+${pontos}pts.`);
    }

    function diminuirPlacar(pontos){
        placar -= pontos;
        console.log(`-${pontos}pts.`);
    }

    function mostrarPlacar(){
        return placar;
    }
    return {aumentarPlacar, diminuirPlacar, mostrarPlacar};
}

const jogo = criarJogo();
jogo.diminuirPlacar(5);
jogo.aumentarPlacar(10);
console.log(`Placar atual: ${jogo.mostrarPlacar()}pts.`);