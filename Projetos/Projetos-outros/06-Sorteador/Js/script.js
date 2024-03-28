const caixaInicial = document.querySelector(".caixa__incio");
const caixaFim = document.querySelector(".caixa__fim");

function mudaDetela() {
    caixaInicial.classList.add("desabilita");
    caixaFim.classList.remove("desabilita");
}


function sortear() {
    const quantidade = Number(document.querySelector(".quantidade-num").value);
    const menor = Number(document.querySelector(".menor-num").value);
    const maior = Number(document.querySelector(".maior-num").value);
    
    const elementoPDentroDaDiv = document.querySelector(".resultado");
    elementoPDentroDaDiv.innerText = "";

    for(let i = 0; i < quantidade; i++){
        const resultado = Math.floor(Math.random() * (maior - menor + 1)) + menor;
    
        const resultadoParaHtmlElementoP = document.createElement("p");
        resultadoParaHtmlElementoP.classList.add("numero");
        resultadoParaHtmlElementoP.innerText = resultado;    
    
        elementoPDentroDaDiv.append(resultadoParaHtmlElementoP);
    }

    mudaDetela();
}