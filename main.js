$(document).ready(function () {
    $('#carrossel-imagens').slick({
        autoplay: true, // Adicione a configuração do autoplay aqui
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(00) 00000-0000'
    })

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            carroInteresse: {
                required: true
            },
        },
        messages: {
            name: 'Por favor, insira o seu nome',
            email: 'Por favor, insira um e-mail válido',
            telefone: 'Por favor, insira um telefone válido',
            carroInteresse: 'Por favor, informe o carro de interesse'
        },
        submitHandler: function(form) {
            // Lógica a ser executada quando o formulário for submetido corretamente
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`);
            }
        }
    });

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#carroInteresse').val(nomeVeiculo)

        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000); // 1000 milissegundos = 1 segundo (pode ajustar conforme necessário)
    });
});
