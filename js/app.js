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