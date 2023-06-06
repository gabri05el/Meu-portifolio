const barras = document.getElementById("div_barras");
const menu = document.getElementById("menu_links");
menu.classList.add("remover");
barras.addEventListener('click', () => {
    barras.classList.toggle("ativo");    
    menu.classList.add("remover");
    if(menu.classList.toggle("ativo")) {
        menu.classList.remove("remover");
    }
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

const biografia = document.querySelector(".section_biografia");
const formacao = document.querySelector(".section_formacao");
const contatos = document.querySelector(".section_contatos");
const projetos = document.querySelector(".section_projetos");

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

const certificado_01 = document.querySelector(".certificados_01");
const certificado_02 = document.querySelector(".certificados_02");
const certificado_03 = document.querySelector(".certificados_03");

botao_01.addEventListener('click', () => {
    certificado_01.classList.remove("removido");
    certificado_02.classList.add("removido");
    certificado_03.classList.add("removido");
})
botao_02.addEventListener('click', () => {
    certificado_02.classList.remove("removido");
    certificado_01.classList.add("removido");
    certificado_03.classList.add("removido");
})
botao_03.addEventListener('click', () => {
    certificado_03.classList.remove("removido");
    certificado_01.classList.add("removido");
    certificado_02.classList.add("removido");
})
