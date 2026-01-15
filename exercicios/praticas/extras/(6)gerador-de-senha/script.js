let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$^&*()_0123456789";
let res = document.getElementById('res');
let tamanhoSenha = document.getElementById('tamanho');

function gerarSenha(){
    let senha = ""; //variavel que armazena a senha
    if(tamanhoSenha.value.length == 0){ //verifica se o campo está vazio
        res.innerHTML = ("Por favor, insira o tamanho da senha.");
        return; //encerra a função(sem esse return, o código continuaria executando e mostraria uma senha vazia)
    }else{
        for(let i = 0; i < tamanhoSenha.value; i++){ //percorre o tamanho da senha
        let randomCharacter = Math.floor(Math.random() * chars.length); //gera um número aleatório entre 0 e o tamanho da string chars
        senha += chars[randomCharacter]; //adiciona o caractere correspondente ao índice randomCharacter na variável senha
    }
    res.innerHTML = `Senha gerada: <strong>${senha}</strong>`;
}
}