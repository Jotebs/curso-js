function calcular(){
    const totalInput = document.getElementById("total");
    const capitalInput = document.getElementById("capital");
    const jurosInput = document.getElementById("juros");
    const anosInput = document.getElementById("anos");

    let capital = Number(capitalInput.value);
    let juros = Number(jurosInput.value / 100); //divide por 100 pois o valor é em porcentagem
    let anos = Number(anosInput.value);

    if(capital < 0 || isNaN(capital)){ //verifica se o valor é negativo ou não é um número
        capital = 0;
        capitalInput.value = 0;
    }
    if(juros < 0 || isNaN(juros)){ //verifica se o valor é negativo ou não é um número
        juros = 0;
        jurosInput.value = 0;
    }
    if(anos < 0 || isNaN(anos)){ //verifica se o valor é negativo ou não é um número
        anos = 0;
        anosInput.value = 0;
    }

    const result = capital * Math.pow((1 + juros / 1), anos); //equação de juros compostos
    totalInput.textContent = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}