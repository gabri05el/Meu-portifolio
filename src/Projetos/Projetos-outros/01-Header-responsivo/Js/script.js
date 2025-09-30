const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('ativo');
    menu.classList.toggle('ativo');
});
