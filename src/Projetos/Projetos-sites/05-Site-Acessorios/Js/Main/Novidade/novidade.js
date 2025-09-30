const slidesNovidade = document.querySelectorAll(".novidade__slides");
const btnAnteriorNovidade = document.getElementById("btn-anterior-novidade");
const btnProximoNovidade = document.getElementById("btn-proximo-novidade");

let slideAtual = 0;

function semSlideNovidade() {
    slidesNovidade.forEach(
        item => item.classList.remove('on__novidade')
    );
    slidesNovidade.forEach(
        item => item.classList.add('off__novidade')
    );
}

function comSlideNovidade() {
    slidesNovidade[slideAtual].classList.remove('off__novidade')
    slidesNovidade[slideAtual].classList.add('on__novidade')
}

function anteriorSlideNovidade() {
    semSlideNovidade();
    if(slideAtual === 0) {
        slideAtual = slidesNovidade.length -1
    }else {
        slideAtual--
    }
    comSlideNovidade();
}

function proximoSlideNovidade() {
    semSlideNovidade();
    if(slideAtual === slidesNovidade.length -1) {
        slideAtual = 0
    }else {
        slideAtual++
    }
    comSlideNovidade();
}

btnAnteriorNovidade.addEventListener('click', anteriorSlideNovidade);
btnProximoNovidade.addEventListener('click', proximoSlideNovidade);
