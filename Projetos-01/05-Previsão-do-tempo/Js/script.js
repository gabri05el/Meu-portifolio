
const chave = "cf401e12c3fc802d749bcd59724ef911";

function colocarDadosNaTela(dados) {
    document.getElementById("cidade").innerHTML = "Tempo em " + dados.name;
    document.getElementById("temperatura").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.getElementById("img-previsao").src =  "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
    document.getElementById("texto-previsao").innerHTML = dados.weather[0].description;
    document.getElementById("umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`).then( resposta => resposta.json());
    colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
    const cidade = document.getElementById("input-cidade").value;
    buscarCidade(cidade);
}