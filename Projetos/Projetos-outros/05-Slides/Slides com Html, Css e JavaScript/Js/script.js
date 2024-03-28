var slide = document.querySelector(".botao__manual");
var x = 1;

document.getElementById("slide1").checked = true;

setInterval(() => {
    proximoSlide();
}, 3000);

function proximoSlide() {
    x++
    if(x > 3) {
        x = 1
    }

    document.getElementById("slide"+x).checked = true;
} 