function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = "dia.png"
        document.body.style.background = '#FFAE1F'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = "tarde.png"
        document.body.style.background = '#BE8963'
    } else {
        //Boa noite
        img.src = "noite.png"
        document.body.style.background = '#023061'
    }
}