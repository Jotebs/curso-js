async function buscarPokemon(){
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu"); //pega os dados da API
    const dados = await resposta.json();  //converte os dados para JSON e dá um parse automático
    console.log(dados.name);
    console.log(dados.types[0].type.name);
}
buscarPokemon();