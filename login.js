$("#loginButton").on('click', function(e) {
    e.preventDefault();

    // Adiciona classes sequenciais com delay
    $('.login').addClass('test');
    setTimeout(() => $('.login').addClass('testtwo'), 300);

    // Animação de autenticação
    setTimeout(() => {
        $(".authent").show()
            .animate({ right: -320, opacity: 1 }, { easing: 'easeOutQuint', duration: 600 })
            .addClass('visible');
    }, 350);

    setTimeout(() => {
        $(".authent").animate({ right: 90, opacity: 0 }, { easing: 'easeOutQuint', duration: 600 });
        $('.login').removeClass('testtwo');
    }, 2500);

    // Limpa animações e exibe mensagem de sucesso
    setTimeout(() => {
        $('.login').removeClass('test').find('div').fadeOut(123);
    }, 2800);

    setTimeout(() => $('.success').fadeIn(), 3200);

    // Restaura estado inicial
    setTimeout(() => {
        $('.success').fadeOut(123);
        $('.login div').fadeIn(123);
        $('#error').fadeOut();
    }, 4000);
});

// Efeitos de foco nos campos de entrada
$('#UsuarioInput, #SenhaInput').on({
    focus() {
        $(this).prev().animate({ 'opacity': 1 }, 200);
    },
    blur() {
        $(this).prev().animate({ 'opacity': 0.5 }, 200);
    },
    keyup() {
        $(this).next().animate({
            opacity: $(this).val() ? 1 : 0,
            right: $(this).val() ? 30 : 20
        }, 200);
    }
});
