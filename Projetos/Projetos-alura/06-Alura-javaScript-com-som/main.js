function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

 // outro      // E
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
 // outro
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

    // se .                      // OU sgnificado.   É mais pontual utilizar o "===".
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        //fazendo uma função para a tecla quando apertada ficar com a cor certa. "tecla ENTER"

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    //retirando a cor quando a tecla não estiver mais precionada. "tecla ENTER"

}
