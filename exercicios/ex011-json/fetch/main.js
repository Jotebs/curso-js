
async function buscarPokemon(){ 

    try{ // bloco try...catch para tratar erros
        const pokemonNome = document.getElementById("pokemonNome").value.toLowerCase(); // obtém o nome do Pokémon do input e converte para minúsculas
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNome}`); // faz a requisição à API do Pokémon

        if(!resposta.ok){
            throw new Error(`Erro na requisição`); // lança um erro se a resposta não for bem-sucedida
        }

        const dados = await resposta.json(); // converte a resposta para JSON
        const pokemonImagem = dados.sprites.front_default; // obtém a URL da imagem do Pokémon
        const img = document.getElementById("pokemonSprite"); // obtém o elemento de imagem no HTML
        
        img.src = pokemonImagem; // define a fonte da imagem para a URL obtida
        img.style.display = "block"; // torna a imagem visível
    }
    catch(erro){
        console.error(erro); // loga o erro no console
        alert("Pokémon não encontrado. Verifique o nome e tente novamente."); // alerta o usuário sobre o erro
    }
}