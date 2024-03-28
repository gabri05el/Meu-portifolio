const mario = document.getElementById("mario");
const cano = document.getElementById("cano");

const pulo = () => {
    mario.classList.add("pulo");

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);
}

const loop = setInterval(() =>{
    const posicaoDoCano = cano.offsetLeft;
    const posicaoDoMario = +window.getComputedStyle(mario).bottom.replace('px', '');

    if( posicaoDoCano <= 120 && posicaoDoCano > 0 && posicaoDoMario < 80) {
        cano.style.animation = 'none';
        cano.style.left = `${posicaoDoCano}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoDoMario}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
},10);

document.addEventListener('keydown', pulo);