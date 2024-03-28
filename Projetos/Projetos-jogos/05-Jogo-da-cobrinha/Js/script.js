const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const pontos = document.querySelector(".pontuacao p span");
const pontuacaoFinal = document.querySelector(".pontuacao__total span");
const menu = document.querySelector(".game__over");

const botaoDePlay = document.querySelector(".botao__play");
const botaoVelocidade = document.querySelectorAll(".velocidade");

const audio = new Audio('../assets/audio.mp3');

const tamanho = 30;

const posicaoInicial = { x: 60, y:60 };

let cobra = [posicaoInicial];

let velocidadeAtivada = "320";

const incrementaPontos = () => {
    pontos.innerText =+ pontos.innerText + 10;
}

const numeroAleatorio = (max, min) => {
    return Math.round(Math.random() * (max - min) + min);
}

const posicaoAleatoria = () => {
    const number = numeroAleatorio(0, canvas.width - tamanho);
    return Math.round(number / 30) * 30;
}

const corAleatoria = () => {
    const red = numeroAleatorio(0, 255);
    const green = numeroAleatorio(0, 255);
    const blue = numeroAleatorio(0, 255);
    return `rgb(${red}, ${green}, ${blue})`
}

const comida = { 
    x: posicaoAleatoria(), 
    y: posicaoAleatoria(), 
    cor: corAleatoria() 
}

let direcao, loopId = "";

const desenhoDaComida = () => {
    const { x, y, cor } = comida;

    ctx.shadowColor = cor;
    ctx.shadowBlur = 6;
    ctx.fillStyle = cor;
    ctx.fillRect(
        x,
        y,
        tamanho,
        tamanho
    );
    ctx.shadowBlur = 0;
}

const desenhoDaCobra = () => {
    ctx.fillStyle = "#ddd";

    cobra.forEach((posicao, index) => {
        if(index == cobra.length - 1) {
            ctx.fillStyle = "white";
        }
        ctx.fillRect(
            posicao.x,
            posicao.y,
            tamanho,
            tamanho
        );
    });
}

const movimentoDaCobra = () => {
    if(!direcao) return;

    const cabeca = cobra[cobra.length - 1];     //cobra.at(-1) Tambem fucionará se for usado só ".at"

    if(direcao == "up") {
        cobra.push( {
            x: cabeca.x,
            y: cabeca.y - tamanho
        });
    }
    if(direcao == "down") {
        cobra.push( {
            x: cabeca.x,
            y: cabeca.y + tamanho
        });
    }
    if(direcao == "right") {
        cobra.push( {
            x: cabeca.x + tamanho,
            y: cabeca.y
        });
    }
    if(direcao == "left") {
        cobra.push( {
            x: cabeca.x - tamanho,
            y: cabeca.y
        });
    }

    cobra.shift()   //Remove o Primeiro elemento do Array. (pop)Faz o inverso do shift
}

const desenhoDasLinhas = () => {
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#191919";
    for(let i = 30; i < canvas.width; i += 30) {
        ctx.beginPath()
        ctx.lineTo(i, 0);
        ctx.lineTo(i, 600);
        ctx.stroke();

        ctx.beginPath()
        ctx.lineTo(0, i);
        ctx.lineTo(600, i);
        ctx.stroke();
    }
}

const verificaSeComeu = () => {
    const cabeca = cobra[cobra.length - 1]

    if(cabeca.x == comida.x && cabeca.y == comida.y) {
        incrementaPontos();
        cobra.push(cabeca);
        audio.play();

        let x = posicaoAleatoria();
        let y = posicaoAleatoria();

        while(cobra.find((posicao) => posicao.x == x && posicao.y)) {
            x = posicaoAleatoria();
            y = posicaoAleatoria();
        }

        comida.x = x;
        comida.y = y;
        comida.cor = corAleatoria();
    }
}

const verificaSeColidiu = () => {
    const cabeca = cobra[cobra.length - 1];
    const limiteDoCanvas = canvas.width - tamanho;
    const pescocoDaCobra = cobra.length - 2;

    const colisaoComAParede = cabeca.x < 0 || cabeca.x > limiteDoCanvas || cabeca.y < 0 || cabeca.y > limiteDoCanvas;
    
    const colisaoComACobra = cobra.find((posicao, index) => {
        return index < pescocoDaCobra && posicao.x == cabeca.x && posicao.y == cabeca.y;
    });

    if(colisaoComAParede || colisaoComACobra) {
        fimDeJogo();
    }
}

const selecionaVelocidade = ({ target }) => {
    const selecionadaVelocidade = target.closest("div");
    const velocidade = selecionadaVelocidade.getAttribute("data-velocidade");

    if(velocidade) {
        botaoVelocidade.forEach((vel) => vel.classList.remove("confg__velocidade_ativada"));
        selecionadaVelocidade.classList.add("confg__velocidade_ativada");
        velocidadeAtivada = velocidade;
    }
}

const fimDeJogo = () => {
    direcao = undefined;

    menu.style.display = "flex";
    canvas.style.display = "none";
    pontuacaoFinal.innerHTML = pontos.innerText;
}

const loopDoJogo = () => {
    clearInterval(loopId);

    ctx.clearRect(0, 0, 600, 600);
    desenhoDasLinhas();
    desenhoDaComida();
    movimentoDaCobra();
    desenhoDaCobra();
    verificaSeComeu();
    verificaSeColidiu();

    loopId = setTimeout(() => {
        loopDoJogo();
    }, velocidadeAtivada);
}

loopDoJogo();

document.addEventListener("keydown", ({ key }) => {
    if(direcao != "down" && key == "ArrowUp" || key == "w" && direcao != "down") {
        direcao = "up"
    }
    if(direcao != "up" && key == "ArrowDown" || key == "s" && direcao != "up") {
        direcao = "down"
    }
    if(direcao != "left" && key == "ArrowRight" || key == "d" && direcao != "left") {
        direcao = "right"
    }
    if(direcao != "right" && key == "ArrowLeft" || key == "a" && direcao != "right") {
        direcao = "left"
    }
});

botaoDePlay.addEventListener("click", () => {
    pontos.innerText = "00";
    canvas.style.display = "block";
    menu.style.display = "none";

    cobra = [posicaoInicial];
});

botaoVelocidade.forEach((vel) => {
    vel.addEventListener("click", selecionaVelocidade);
});