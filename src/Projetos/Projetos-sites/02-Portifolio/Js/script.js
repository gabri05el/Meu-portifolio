function escrevendoLetras() {
    function ativaLetra(elemento) {                 // efeito das letra segundo H2
        const arrTexto = elemento.innerHTML.split('');          //separa letra por letra.(os espacos tambem são separados)
        elemento.innerHTML = '';
        arrTexto.forEach((letra,i) => {
            setTimeout(() =>{
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);              // efeito das letra segundo H2
}
escrevendoLetras();

function menuMobile() {                //O Menu do Mobile
    const ativaMenu = document.querySelector(".fa-bars");
    const navMenu = document.querySelector("header .navegacao-primaria");
    
    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle("fa-x");
        navMenu.classList.toggle("ativado");
    });
}
menuMobile();

function sobreMim() {                //Os botões do Resumo
    const divExperiencia = document.querySelectorAll(".experience_content div");
    const liExperiencia = document.querySelectorAll(".experience_content ul li");
    const divEducacao = document.querySelectorAll(".education_content div");
    const liEducacao = document.querySelectorAll(".education_content ul li");

    divExperiencia[0].classList.add('ativo');
    liExperiencia[0].classList.add('ativo');
    divEducacao[0].classList.add('ativo');
    liEducacao[0].classList.add('ativo');

    function slideShow(index) {
        divExperiencia.forEach((div) => {
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    function slideShow2(index) {
        divEducacao.forEach((div) => {
            div.classList.remove('ativo');
        });
        liEducacao.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divEducacao[index].classList.add('ativo');
        liEducacao[index].classList.add('ativo');
    }

    liExperiencia.forEach((event,index) => {
        event.addEventListener('click', () => {
            slideShow(index);
        });
    });

    liEducacao.forEach((event,index) => {
        event.addEventListener('click', () => {
            slideShow2(index);
        });
    });
}
sobreMim();