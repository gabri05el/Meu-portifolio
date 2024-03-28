const ponteiroHoras = document.querySelector(".ponteiro__horas");
const ponteiroMinutos = document.querySelector(".ponteiro__minutos");
const ponteiroSegundos = document.querySelector(".ponteiro__segundos");

const tempoDoRelogio = () => {
    const tempo = new Date();

    return {
        horas: tempo.getHours(),
        minutos: tempo.getMinutes(),
        segundos: tempo.getSeconds(),
    }
}

setInterval(() => {
    const { horas, minutos, segundos } = tempoDoRelogio();

    ponteiroHoras.style.transform = `translate(0, -50%) rotate(${horas * 30}deg)`;
    ponteiroMinutos.style.transform = `translate(0, -50%) rotate(${minutos * 6}deg)`;
    ponteiroSegundos.style.transform = `translate(0, -50%) rotate(${segundos * 6}deg)`;
}, 1000);
