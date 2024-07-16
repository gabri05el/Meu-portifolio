var mainAvalicaoSlide = document.querySelector(".main__avaliacao_manu_btn");
var posicao = 1;

document.getElementById("main-avaliacao-slide-1").checked = true;

setInterval(() => {
    proximaAvalicaoSlide();
}, 8000);

function proximaAvalicaoSlide() {
    posicao++
    if(posicao > 7) {
        posicao = 1
    }
    document.getElementById("main-avaliacao-slide-"+posicao).checked = true;
}
