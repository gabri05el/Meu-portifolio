$(window).scroll(function() {
    var posicao = $(this).scrollTop();
    $(".carro").css( {
        'right': posicao / 4+"%"
    });
});