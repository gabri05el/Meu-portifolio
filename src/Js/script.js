const hamburguer = document.getElementById("div_barras");
const menu = document.getElementById("header__menu_links");

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('ativo');
    menu.classList.toggle('ativo');
});

function digitandoLetras() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra,i) => {
            setTimeout(() =>{
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }
    const digitar = document.getElementById('digitando');
    ativaLetra(digitar);
}
digitandoLetras();

const botaoMenu = document.getElementById("menu");
const botaobiografia = document.getElementById("biografia");
const botaoformacao = document.getElementById("formacao");
const botaocontatos = document.getElementById("contatos");
const botaoprojetos = document.getElementById("projetos");

const biografia = document.querySelector(".main__biografia");
const formacao = document.querySelector(".main__formacao");
const contatos = document.querySelector(".main__contato");
const projetos = document.querySelector(".main__projeto");

botaoMenu.addEventListener('click', () => {
    biografia.classList.remove("removido");
    formacao.classList.remove("removido");
    contatos.classList.remove("removido");
    projetos.classList.remove("removido");
})
botaobiografia.addEventListener('click', () => {
    biografia.classList.remove("removido");
    formacao.classList.add("removido");
    contatos.classList.add("removido");
    projetos.classList.add("removido");
})
botaoformacao.addEventListener('click', () => {
    formacao.classList.remove("removido");
    biografia.classList.add("removido");
    contatos.classList.add("removido");
    projetos.classList.add("removido");
})
botaocontatos.addEventListener('click', () => {
    contatos.classList.remove("removido");
    biografia.classList.add("removido");
    formacao.classList.add("removido");
    projetos.classList.add("removido");
})
botaoprojetos.addEventListener('click', () => {
    projetos.classList.remove("removido");
    biografia.classList.add("removido");
    formacao.classList.add("removido");
    contatos.classList.add("removido");
})

const botao_01 = document.getElementById("formacao_01");
const botao_02 = document.getElementById("formacao_02");
const botao_03 = document.getElementById("formacao_03");
const botao_04 = document.getElementById("formacao_04");
const botao_05 = document.getElementById("formacao_05");
const botao_06 = document.getElementById("formacao_06");

const certificado_01 = document.getElementById("certificados_01");
const certificado_02 = document.getElementById("certificados_02");
const certificado_03 = document.getElementById("certificados_03");
const certificado_04 = document.getElementById("certificados_04");
const certificado_05 = document.getElementById("certificados_05");
const certificado_06 = document.getElementById("certificados_06");

botao_01.addEventListener('click', () => {
    certificado_01.classList.remove("removido");
    certificado_02.classList.add("removido");
    certificado_03.classList.add("removido");
    certificado_04.classList.add("removido");
    certificado_05.classList.add("removido");
    certificado_06.classList.add("removido");
})
botao_02.addEventListener('click', () => {
    certificado_02.classList.remove("removido");
    certificado_01.classList.add("removido");
    certificado_03.classList.add("removido");
    certificado_04.classList.add("removido");
    certificado_05.classList.add("removido");
    certificado_06.classList.add("removido");
})
botao_03.addEventListener('click', () => {
    certificado_03.classList.remove("removido");
    certificado_01.classList.add("removido");
    certificado_02.classList.add("removido");
    certificado_04.classList.add("removido");
    certificado_05.classList.add("removido");
    certificado_06.classList.add("removido");
})
botao_04.addEventListener('click', () => {
    certificado_04.classList.remove("removido");
    certificado_01.classList.add("removido");
    certificado_02.classList.add("removido");
    certificado_03.classList.add("removido");
    certificado_05.classList.add("removido");
    certificado_06.classList.add("removido");
})
botao_05.addEventListener('click', () => {
    certificado_05.classList.remove("removido");
    certificado_01.classList.add("removido");
    certificado_02.classList.add("removido");
    certificado_03.classList.add("removido");
    certificado_04.classList.add("removido");
    certificado_06.classList.add("removido");
})
botao_06.addEventListener('click', () => {
    certificado_06.classList.remove("removido");
    certificado_01.classList.add("removido");
    certificado_02.classList.add("removido");
    certificado_03.classList.add("removido");
    certificado_04.classList.add("removido");
    certificado_05.classList.add("removido");
})


const mode = document.getElementById("modo_icone");

mode.addEventListener('click', () => {
    const body = document.querySelector(".body");

    if(mode.classList.contains("fa-moon")) {
        mode.classList.remove("fa-moon");
        mode.classList.add("fa-sun");

        body.classList.add("dark");
        return;
    }
    mode.classList.add("fa-moon");
    mode.classList.remove("fa-sun");
    body.classList.remove("dark");
});
