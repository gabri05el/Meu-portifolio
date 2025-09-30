const sort1 = document.getElementById("sort-1-10");
const link1 = document.getElementById("link-1-10");
link1.addEventListener("click", () => {
    sort1.classList.remove("sort__off");
    sort2.classList.add("sort__off");
    sort3.classList.add("sort__off");
    sort4.classList.add("sort__off");
    sort5.classList.add("sort__off");

    num2.innerHTML = "0 0 0 0 0 0 0 0";
    num3.innerHTML = "0 0 0 0 0 0 0 0 0 0 0 0";
    num4.innerHTML = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0";
    num5.innerHTML = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0";
});

const sort2 = document.getElementById("sort-1-15")
const link2 = document.getElementById("link-1-15");
link2.addEventListener("click", () => {
    sort2.classList.remove("sort__off");
    sort1.classList.add("sort__off");
    sort3.classList.add("sort__off");
    sort4.classList.add("sort__off");
    sort5.classList.add("sort__off");

    num1.innerHTML = "0 0 0 0";
    num3.innerHTML = "0 0 0 0 0 0 0 0 0 0 0 0";
    num4.innerHTML = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0";
    num5.innerHTML = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0";
});

const sort3 = document.getElementById("sort-1-20");
const link3 = document.getElementById("link-1-20");
link3.addEventListener("click", () => {
    sort3.classList.remove("sort__off");
    sort1.classList.add("sort__off");
    sort2.classList.add("sort__off");
    sort4.classList.add("sort__off");
    sort5.classList.add("sort__off");

    num1.innerHTML = "0 0 0 0";
    num2.innerHTML = "0 0 0 0 0 0 0 0";
    num4.innerHTML = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0";
    num5.innerHTML = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0";
});

const sort4 = document.getElementById("sort-1-25");
const link4 = document.getElementById("link-1-25");
link4.addEventListener("click", () => {
    sort4.classList.remove("sort__off");
    sort1.classList.add("sort__off");
    sort2.classList.add("sort__off");
    sort3.classList.add("sort__off");
    sort5.classList.add("sort__off");

    num1.innerHTML = "0 0 0 0";
    num2.innerHTML = "0 0 0 0 0 0 0 0";
    num3.innerHTML = "0 0 0 0 0 0 0 0 0 0 0 0";
    num5.innerHTML = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0";
});

const sort5 = document.getElementById("sort-1-30");
const link5 = document.getElementById("link-1-30");
link5.addEventListener("click", () => {
    sort5.classList.remove("sort__off");
    sort1.classList.add("sort__off");
    sort2.classList.add("sort__off");
    sort3.classList.add("sort__off");
    sort4.classList.add("sort__off");

    num1.innerHTML = "0 0 0 0";
    num2.innerHTML = "0 0 0 0 0 0 0 0";
    num3.innerHTML = "0 0 0 0 0 0 0 0 0 0 0 0";
    num4.innerHTML = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0";
});


const num1 = document.getElementById("num-1");
const btnUm = document.getElementById("btn-1-10");
btnUm.addEventListener("click", btn1);

const num2 = document.getElementById("num-2");
const btnDois = document.getElementById("btn-1-15");
btnDois.addEventListener("click", btn2);

const num3 = document.getElementById("num-3");
const btnTres = document.getElementById("btn-1-20");
btnTres.addEventListener("click", btn3);

const num4 = document.getElementById("num-4");
const btnQuatro = document.getElementById("btn-1-25");
btnQuatro.addEventListener("click", btn4);

const num5 = document.getElementById("num-5");
const btnCinco = document.getElementById("btn-1-30");
btnCinco.addEventListener("click", btn5);

function sortear(numMax, max) {
    var numeros = [];

    for (var numero = 1; numero <= max; numero++) {
        numeros.push(numero);
    }

    numeros.sort(
        function randomizar(a, b) {
            return Math.random() * 2 - 1;
        }
    );

    return numeros.splice(1, numMax);
}

function btn1() {
    const e = sortear(4, 10).join(' ');
    num1.innerHTML = e;
}

function btn2() {
    const e = sortear(8, 15).join(' ');
    num2.innerHTML = e;
}

function btn3() {
    const e = sortear(12, 20).join(' ');
    num3.innerHTML = e;
}

function btn4() {
    const e = sortear(16, 25).join(' ');
    num4.innerHTML = e;
}

function btn5() {
    const e = sortear(20, 30).join(' ');
    num5.innerHTML = e;
}
