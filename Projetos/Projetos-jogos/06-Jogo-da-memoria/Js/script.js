/* Tela De Login */
const input = document.querySelector(".input__login");
const botaoDoLogin = document.querySelector(".botao__login");
const telaDelogin = document.querySelector(".tela__de_login");
/* Tela Do Jogo*/
const telaDoJogo = document.querySelector(".tela__jogo");
const nome = document.querySelector(".nome");
const tempo = document.querySelector(".tempo");
const cartasDoJogo = document.querySelector(".cartas__jogo");
const verdeClaro = "#4cfa07";
const verdeEscuro = "#042e08";
const amarelo = "#ecdd0a";
const azulClaro = "#0acaec";
const azulEscuro = "#0b08b3";
const vermelho = "#f10a0a";
const cinza = "#7e7e80";
const laranja = "#ff9a02";
const branco = "#ffffff";
const preto = "#000000";
const roxo = "#6309d8";
const rosa = "#f30fc2";
const corDasCartas = [
    verdeClaro,
    verdeEscuro,
    amarelo,
    azulClaro,
    azulEscuro,
    vermelho,
    cinza,
    laranja,
    branco,
    preto,
    roxo,
    rosa,    
];
let primeiraCarta = "";
let segundaCarta = "";
/* Tela Do Fim De Jogo*/
const telaDoFimGanhou = document.querySelector(".tela__de_fim_jogo");
const telaDoFimPorTempo = document.querySelector(".tela__de_fim_tempo");
const botaoDeFim = document.querySelector(".botao__fim");

/* Tela De Login */
function recebeNome() {
    nome.innerHTML = input.value;
}
function cartasEmbaralhadas() {
    const duplicadoAsCorDasCartas = [...corDasCartas, ...corDasCartas];
    const cartasSorteadas = duplicadoAsCorDasCartas.sort( () => Math.random() - 0.5);
    cartasSorteadas.forEach((corDaCarta) => {
        const carta = criaCarta(corDaCarta);
        cartasDoJogo.appendChild(carta);
    });
}
function doLoginParaOJogo() {
    telaDelogin.classList.add("desabilita");
    telaDoJogo.classList.remove("desabilita");
}
/* Tela Do Jogo*/
function tempoDoJogo() {
    let i = 1;
    tempoLimite = setInterval(() => {
        tempo.innerHTML = i++;
        if(tempo.innerHTML > 120) {
            fimDeJogoTempoAcabou();
        }
    }, 1000);
}
function checagemSeAcabouAsCartas() {
    const desabilitadasAsCartas = document.querySelectorAll(".carta__certa");
    if(desabilitadasAsCartas.length === 24) {
        fimDeJogoGanhou();
    }
}
function checagemDaCarta() {
    const primeiraCorDaCarta = primeiraCarta.getAttribute("data-cor");
    const segundaCorDaCarta = segundaCarta.getAttribute("data-cor");
    if(primeiraCorDaCarta === segundaCorDaCarta) {
        primeiraCarta.firstChild.classList.add("carta__certa");
        segundaCarta.firstChild.classList.add("carta__certa");
        primeiraCarta = "";
        segundaCarta = "";
        checagemSeAcabouAsCartas();
    }else {
        setTimeout(() => {
            primeiraCarta.classList.remove("carta__revelada");
            segundaCarta.classList.remove("carta__revelada");
            primeiraCarta = "";
            segundaCarta = "";
        }, 500);
    }
}
function cartaRevelada({ target }) {
    if(target.parentNode.className.includes("carta__revelada")) {
        return;
    }
    if(primeiraCarta === "") {
        target.parentNode.classList.add("carta__revelada");
        primeiraCarta = target.parentNode;
    }else if(segundaCarta === "") {
        target.parentNode.classList.add("carta__revelada");
        segundaCarta = target.parentNode;
        checagemDaCarta();
    }
}
function elementosDaCarta(tag, className) {
    const elementos = document.createElement(tag);
    elementos.className = className;
    return elementos;
}
function criaCarta(corDaCarta) {
    const carta = elementosDaCarta("div", "carta");
    const frenteDaCarta = elementosDaCarta("div", "lados carta__frente");
    const costasDaCarta = elementosDaCarta("div", "lados carta__costas");
    frenteDaCarta.style.backgroundColor = `${corDaCarta}`;
    carta.appendChild(frenteDaCarta);
    carta.appendChild(costasDaCarta)
    carta.addEventListener("click", cartaRevelada);
    carta.setAttribute("data-cor", corDaCarta);
    return carta;
}
/* Tela Do Fim De Jogo*/
function fimDeJogoGanhou() {
    telaDoJogo.classList.add("desabilita");
    telaDoFimGanhou.classList.remove("desabilita");
}
function fimDeJogoTempoAcabou() {
    telaDoJogo.classList.add("desabilita");
    telaDoFimPorTempo.classList.remove("desabilita");
}
function doFimParaOLogin() {
    window.location.reload();
}

/* Tela De Login */
botaoDoLogin.addEventListener("click", () => {
    let errou = input.value;
    if(errou.length < 3) {
        alert("Coloque seu nome");
    }else if(errou.length > 20){
        alert("Esse nome é muito grande, Dimínua esse nome.");
    }else {
        recebeNome();
        doLoginParaOJogo();
        tempoDoJogo();
        cartasEmbaralhadas();
    }
});
