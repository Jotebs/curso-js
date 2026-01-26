/*
const usuario = {
    nome: "João Vitor",
    idade: 17,
    curso: "Engenharia de Software"
}

const usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON);





/*
const textoJSON = '{"produto":"Camiseta","preco":59.9,"emEstoque":true}';

const textoParsed = JSON.parse(textoJSON);
console.log(textoParsed.preco);
*/




/*
const filmes = [
    {
        titulo: "Vingadores: Ultimato",
        ano: 2019
    },
    {
        titulo: "O Rei Leão",
        ano: 1999
    },
    {
        titulo:"Gente Grande",
        ano: 2010
    }
]

const filmesJSON = JSON.stringify(filmes);
const filmesParsed = JSON.parse(filmesJSON);

console.log(filmesParsed[1].titulo);
*/




/*
const respostaAPI = `
[
  {"nome":"Ana","idade":20},
  {"nome":"Carlos","idade":25}
]
`;

const respostaParsed = JSON.parse(respostaAPI);

respostaParsed.forEach((usuario) => {console.log(`${usuario.nome} tem ${usuario.idade} anos.`)});
*/




const config = {
    theme: "dark",
    language: "pt-BR",
};

localStorage.setItem("config", JSON.stringify(config));
// OBS: Este não funciona no Node.js, apenas em navegadores, por isso ao dar um F8 no VSCode ele vai dar erro.
const configJSON = localStorage.getItem("config");
const configParsed = JSON.parse(configJSON);

console.log(configParsed.theme);
