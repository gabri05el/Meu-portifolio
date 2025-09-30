const form = document.getElementById("form");

form.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    const imc = (peso / (altura * altura)).toFixed(2);

    const valor = document.getElementById("valor");
    let descricao = '';

    valor.classList.add('atencao');

    document.getElementById('infos').classList.remove('esconder');

    if(imc < 18.5) {
        descricao = "Cuidado você está abaixo do Peso";
    } else if(imc >= 18.5 && imc <= 25) {
        descricao = "Muito bom você está com o Peso ideal";
        valor.classList.remove('atencao');
        valor.classList.add('normal');
    } else if(imc > 25 && imc <= 30) {
        descricao = "Cuidado você está com Sobrepeso";
    } else if(imc > 30 && imc <= 35) {
        descricao = "Cuidado você está com obesidade moderada";
    } else if(imc > 35 && imc <= 40) {
        descricao = "Cuidado você está com obesidade severa";
    } else {
        descricao = "Cuidado você está com obesidade morbita";
    }
    valor.textContent = imc.replace('.', ',' );
    document.getElementById("descricao").textContent = descricao;
});