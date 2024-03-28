const cep = document.getElementById("cep");
const lagradouro = document.getElementById("lagradouro");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

function pesquisaCep() {
    var buscaCep = document.getElementById("input-cep").value;
    var url = "https://viacep.com.br/ws/"+buscaCep+"/json";
    fetch(url).then(response => response.json()).then(data => {
        if(data.erro) {
            cep.innerHTML = "Local não encontrado";
            lagradouro.innerHTML = "Local não encontrado";
            bairro.innerHTML = "Local não encontrado";
            cidade.innerHTML = "Local não encontrado";
            estado.innerHTML = "Local não encontrado";
        }else {
            cep.innerHTML = data.cep;
            lagradouro.innerHTML = data.lagradouro;
            bairro.innerHTML = data.bairro;
            cidade.innerHTML = data.localidade;
            estado.innerHTML = data.uf;
        }
    }).catch(error => alert("Seu Cep deve conter ao menos 8 digitos ou Está escrito de forma errada"));
}
