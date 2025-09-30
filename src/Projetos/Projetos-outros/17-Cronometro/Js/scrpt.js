const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");
const millisegundosEl = document.getElementById("millisegundos");

const botaoInicia = document.getElementById("inicia-botao");
const botaoPausa = document.getElementById("pausa-botao");
const botaoContinua = document.getElementById("continuar-botao");
const botaoReseta = document.getElementById("resetar-botao");

let intervalo;
let minutos = 0;
let segundos = 0;
let millisegundos = 0;
let sePause = false;

botaoInicia.addEventListener("click", iniciaTempo);
botaoPausa.addEventListener("click", pausaTempo);
botaoContinua.addEventListener("click", continuaTempo);
botaoReseta.addEventListener("click", resetarTempo)

function iniciaTempo() {

    intervalo = setInterval(() => {
        if(!sePause) {
            millisegundos += 10;
            
            if(millisegundos === 1000) {
                segundos++;
                millisegundos = 0;
            }
            
            if(segundos === 60) {
                minutos++;
                segundos = 0;
            }

            minutosEl.textContent = formataTempo(minutos);
            segundosEl.textContent = formataTempo(segundos);
            millisegundosEl.textContent = formataMillisegundos(millisegundos);
        }
    }, 10);

    botaoInicia.style.display = "none";
    botaoPausa.style.display = "block";
}

function pausaTempo() {
    sePause = true;
    botaoPausa.style.display = "none";
    botaoContinua.style.display = "block";
}

function continuaTempo() {
    sePause = false;
    botaoPausa.style.display = "block";
    botaoContinua.style.display = "none";
}

function resetarTempo() {
    clearInterval(intervalo);
    minutos = 0;
    segundos = 0;
    millisegundos = 0;
    
    minutosEl.textContent = "00";
    segundosEl.textContent = "00";
    millisegundosEl.textContent = "000";

    botaoInicia.style.display = "block";
    botaoPausa.style.display = "none";
    botaoContinua.style.display = "none";
}

function formataTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

function formataMillisegundos(tempo) {
    return tempo < 100 ? `${tempo}`.padStart(3, "0") : tempo;
}