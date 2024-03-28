const teclas = document.querySelectorAll(".tecla");
const ativaAsTeclas = document.querySelector(".caixa");
const interruptor = document.querySelector(".interruptor");
const teclado = document.querySelector(".teclado");

const tocaSom = (som) => {
    const audio = new Audio(`./Sons/som__${som}.wav`)
    audio.play();
}

const teclaClicada = (tecla) => {
    tocaSom(tecla.getAttribute("data-som"));
    if(tecla.className.includes("tecla__preta")) {
        tecla.classList.add("tecla__preta_precionada");
    }else {
        tecla.style.background = "#ddd";
    }
}
const teclaDesclicada = (tecla) => {
    if(tecla.className.includes("tecla__preta")) {
        tecla.classList.remove("tecla__preta_precionada");
    }else {
        tecla.style.background = "#fff";
    }
}

teclas.forEach((tecla) => {
    tecla.addEventListener('mousedown', () => teclaClicada(tecla));
    tecla.addEventListener('mouseup', () => teclaDesclicada(tecla));
});

ativaAsTeclas.addEventListener('change', ({ target }) => {
    if(target.checked) {
        interruptor.classList.add("botao__interruptor_ativado");
        teclado.classList.remove("desabilita__teclas");
    }else {
        interruptor.classList.remove("botao__interruptor_ativado");
        teclado.classList.add("desabilita__teclas");
    }
});

const tecladoPreicionado = {
    "q" : () => teclaClicada(teclas[0]),
    "1" : () => teclaClicada(teclas[1]),
    "w" : () => teclaClicada(teclas[2]),
    "2" : () => teclaClicada(teclas[3]),
    "e" : () => teclaClicada(teclas[4]),
    "r" : () => teclaClicada(teclas[5]),
    "3" : () => teclaClicada(teclas[6]),
    "t" : () => teclaClicada(teclas[7]),
    "4" : () => teclaClicada(teclas[8]),
    "y" : () => teclaClicada(teclas[9]),
    "5" : () => teclaClicada(teclas[10]),
    "u" : () => teclaClicada(teclas[11]),
    "i" : () => teclaClicada(teclas[12]),
    "6" : () => teclaClicada(teclas[13]),
    "o" : () => teclaClicada(teclas[14]),
    "7" : () => teclaClicada(teclas[15]),
    "p" : () => teclaClicada(teclas[16]),
    "a" : () => teclaClicada(teclas[17]),
    "8" : () => teclaClicada(teclas[18]),
    "s" : () => teclaClicada(teclas[19]),
    "9" : () => teclaClicada(teclas[20]),
    "d" : () => teclaClicada(teclas[21]),
    "0" : () => teclaClicada(teclas[22]),
    "f" : () => teclaClicada(teclas[23]),
    "g" : () => teclaClicada(teclas[24]),
    "x" : () => teclaClicada(teclas[25]),
    "h" : () => teclaClicada(teclas[26]),
    "c" : () => teclaClicada(teclas[27]),
    "j" : () => teclaClicada(teclas[28]),
    "k" : () => teclaClicada(teclas[29]),
    "v" : () => teclaClicada(teclas[30]),
    "l" : () => teclaClicada(teclas[31]),
    "b" : () => teclaClicada(teclas[32]),
    "z" : () => teclaClicada(teclas[33]),
    "n" : () => teclaClicada(teclas[34]),
    "m" : () => teclaClicada(teclas[35])
}

const tecladoSolto = {
    "q" : () => teclaDesclicada(teclas[0]),
    "1" : () => teclaDesclicada(teclas[1]),
    "w" : () => teclaDesclicada(teclas[2]),
    "2" : () => teclaDesclicada(teclas[3]),
    "e" : () => teclaDesclicada(teclas[4]),
    "r" : () => teclaDesclicada(teclas[5]),
    "3" : () => teclaDesclicada(teclas[6]),
    "t" : () => teclaDesclicada(teclas[7]),
    "4" : () => teclaDesclicada(teclas[8]),
    "y" : () => teclaDesclicada(teclas[9]),
    "5" : () => teclaDesclicada(teclas[10]),
    "u" : () => teclaDesclicada(teclas[11]),
    "i" : () => teclaDesclicada(teclas[12]),
    "6" : () => teclaDesclicada(teclas[13]),
    "o" : () => teclaDesclicada(teclas[14]),
    "7" : () => teclaDesclicada(teclas[15]),
    "p" : () => teclaDesclicada(teclas[16]),
    "a" : () => teclaDesclicada(teclas[17]),
    "8" : () => teclaDesclicada(teclas[18]),
    "s" : () => teclaDesclicada(teclas[19]),
    "9" : () => teclaDesclicada(teclas[20]),
    "d" : () => teclaDesclicada(teclas[21]),
    "0" : () => teclaDesclicada(teclas[22]),
    "f" : () => teclaDesclicada(teclas[23]),
    "g" : () => teclaDesclicada(teclas[24]),
    "x" : () => teclaDesclicada(teclas[25]),
    "h" : () => teclaDesclicada(teclas[26]),
    "c" : () => teclaDesclicada(teclas[27]),
    "j" : () => teclaDesclicada(teclas[28]),
    "k" : () => teclaDesclicada(teclas[29]),
    "v" : () => teclaDesclicada(teclas[30]),
    "l" : () => teclaDesclicada(teclas[31]),
    "b" : () => teclaDesclicada(teclas[32]),
    "z" : () => teclaDesclicada(teclas[33]),
    "n" : () => teclaDesclicada(teclas[34]),
    "m" : () => teclaDesclicada(teclas[35])
}

document.addEventListener('keydown', (event) => {
    tecladoPreicionado[event.key]();
});

document.addEventListener('keyup', (event) => {
    tecladoSolto[event.key]();
});