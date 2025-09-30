const imagemDoPokemon = document.querySelector(".imagem__pokemon");
const numeroDoPokemon = document.querySelector(".numero__pokemon");
const nomeDoPokemon = document.querySelector(".nome__pokemon");

const formulario = document.querySelector(".pesquisa");
const pesquisa = document.querySelector(".pesquisa__pokemon");
const botaoDeAnterior = document.querySelector(".botao-anterior");
const botaoDeProximo = document.querySelector(".botao-proximo");

let pokemonPesquisado = 1;
const buscaDados = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(APIResponse.status === 200) {
        const dados = await APIResponse.json();
        return dados;
    }
}

const renderizacaoDoPokemon = async (pokemon) => {
    nomeDoPokemon.innerHTML = "Carregando...";
    numeroDoPokemon.innerHTML = "";

    const dados = await buscaDados(pokemon);

    if(dados) {
        numeroDoPokemon.innerHTML = dados.id;
        pokemonPesquisado = dados.id;
        nomeDoPokemon.innerHTML = dados.name;
        imagemDoPokemon.src = dados.sprites.versions['generation-v']['black-white'].front_default;
        pesquisa.value = "";
    } else {
        nomeDoPokemon.innerHTML = "não encontrado";
        numeroDoPokemon.innerHTML = "";
        imagemDoPokemon.src = Error;
    }
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    renderizacaoDoPokemon(pesquisa.value.toLowerCase());
});

botaoDeAnterior.addEventListener("click", () => {
    if(pokemonPesquisado > 1) {
        pokemonPesquisado -= 1;
        renderizacaoDoPokemon(pokemonPesquisado);
    }
});
botaoDeProximo.addEventListener("click", () => {
    if (pokemonPesquisado < 898) {
        pokemonPesquisado += 1;
        renderizacaoDoPokemon(pokemonPesquisado);
    }
});

renderizacaoDoPokemon(pokemonPesquisado);