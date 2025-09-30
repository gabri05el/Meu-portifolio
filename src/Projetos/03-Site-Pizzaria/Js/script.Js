const barras = document.getElementById("barras");
const menu = document.getElementById("menu");

barras.addEventListener('click', () => {
    barras.classList.toggle('ativo');
    menu.classList.toggle('ativo');
});