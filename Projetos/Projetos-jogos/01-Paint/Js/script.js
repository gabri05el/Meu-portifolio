const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const corDoInput = document.querySelector(".cor__input");
const ferramentas = document.querySelectorAll(".botao__ferramentas");
const tamanhoDoBotao = document.querySelectorAll(".botao__tamanho");
const limpa = document.querySelector(".botao__limpa");

let tamanhoDaFerramenta = 20;

let pintando = false;

let ativaFerramenta = "pincel"; //Pincel ficou como o valor padrão ativado

corDoInput.addEventListener("change", ({ target }) => {
    ctx.fillStyle = target.value;
});

canvas.addEventListener("mousedown", (/* event */ { clientX, clientY } ) => {
    // const { clientX, clientY } = event
    pintando = true;
    if(ativaFerramenta == "pincel") {
        desenha(clientX, clientY);
    }
    if(ativaFerramenta == "borracha") {
        apagar(clientX, clientY);
    }
});

canvas.addEventListener("mousemove", ({ clientX, clientY }) => {
    if(pintando) {
        if(ativaFerramenta == "pincel") {
            desenha(clientX, clientY);
        }
        if(ativaFerramenta == "borracha") {
            apagar(clientX, clientY);
        }
    }
});

canvas.addEventListener("mouseup", ( { clientX, clientY } ) => {    
    pintando = false;
});

const desenha = (x, y) => {
    ctx.globalCompositeOperation = "source-over";
    ctx.beginPath();
    ctx.arc(
        x - canvas.offsetLeft,
        y - canvas.offsetTop,
        tamanhoDaFerramenta / 2,
        0,
        2 * Math.PI
    );
    ctx.fill();
}

const apagar = (x, y) => {
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(
        x - canvas.offsetLeft,
        y - canvas.offsetTop,
        tamanhoDaFerramenta / 2,
        0,
        2 * Math.PI
    );
    ctx.fill();
}

const selecionaFerramenta = ({ target }) => {
    const selecionadoFerramenta = target.closest("button"); //Seleciona o button mais proximo se clicado no (span)
    const acao = selecionadoFerramenta.getAttribute("data-acao");

    if(acao) {
        ferramentas.forEach((ferramenta) => ferramenta.classList.remove("ferramenta__ativada"));
        selecionadoFerramenta.classList.add("ferramenta__ativada");
        ativaFerramenta = acao;
    }
}

const selecionaTamanho = ({ target }) => {
    const selecionadoTamanho = target.closest("button");
    const tamanho = selecionadoTamanho.getAttribute("data-tamanho");

    tamanhoDoBotao.forEach((ferramenta) => ferramenta.classList.remove("ferramenta__ativada"));
    selecionadoTamanho.classList.add("ferramenta__ativada");
    tamanhoDaFerramenta = tamanho;
}

ferramentas.forEach((ferramenta) => {
    ferramenta.addEventListener("click", selecionaFerramenta);
});

tamanhoDoBotao.forEach((tamanho) => {
    tamanho.addEventListener("click", selecionaTamanho);
});

limpa.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
});