// Exemplo de JavaScript inicial para desativar envios de formulário, se houver campos inválidos.
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
        var forms = document.getElementsByClassName('needs-validation');
        // Faz um loop neles e evita o envio
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function validarEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    }
    else {
        alert("E-mail inválido!");
    }
}

var password = document.getElementById("senha")
    , confirm_password = document.getElementById("confirmarSenha");

function validarSenha() {
    if (senha.value != confirmarSenha.value) {
        confirmarSenha.setCustomValidity("Senhas diferentes!");
    } else {
        confirmarSenha.setCustomValidity('');
    }
}

senha.onchange = validarSenha;
confirmarSenha.onkeyup = validarSenha;

<<<<<<< HEAD
!function (t) {
=======
function validar(){
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')
    let link = document.getElementById('linkDesabilitado')

    if(email.value.length == 0 && senha.value.length == 0){
        window.alert('[ERRO] Os campos tem que estar preenchidos.')
        link.href = ''
    }else{
        link.href = "pag_inicial.html"
    }

}

/*!function (t) {
>>>>>>> d0a2579d52690e47171693076858aa8262d9d31d
    "use strict";
    t("#sidebarToggle, #sidebarToggleTop").on("click",

        function (o) {
            t("body").toggleClass("sidebar-toggled"),
                t(".sidebar").toggleClass("toggled"),
                t(".sidebar").hasClass("toggled") && t(".sidebar .collapse").collapse("hide")
        }),
        t(window).resize(function () {
            t(window).width() < 768 && t(".sidebar .collapse").collapse("hide")
        }),
        t("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel",
            function (o) {
                if (768 < t(window).width()) {
                    var e = o.originalEvent, l = e.wheelDelta || -e.detail;
                    this.scrollTop += 30 * (l < 0 ? 1 : -1), o.preventDefault()
                }
            }), t(document).on("scroll", function () { 100 < t(this).scrollTop() ? t(".scroll-to-top").fadeIn() : t(".scroll-to-top").fadeOut() }), t(document).on("click", "a.scroll-to-top", function (o) { var e = t(this); t("html, body").stop().animate({ scrollTop: t(e.attr("href")).offset().top }, 1e3, "easeInOutExpo"), o.preventDefault() })
}(jQuery);
<<<<<<< HEAD

function validar(){
    let email = document.getElementById('email-entrada')
    let senha = document.getElementById('senha-de-entrada')
    let link = document.getElementById('linkDesabilitado')

    if(email.value.length == 0 || senha.value.length == 0){
        window.alert('[ERRO] Os campos tem que estar preenchidos.')
        link.href = ''
    }else{
        link.href = "pgInicial.html"
    }

}
=======
>>>>>>> d0a2579d52690e47171693076858aa8262d9d31d
