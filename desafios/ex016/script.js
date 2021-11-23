function contar() {
    var ini = document.getElementById("txti")
    var fim = document.getElementById("txtf")
    var passo = document.getElementById("txtp")
    var resultado = document.getElementById("res")
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] - Faltam dados!")
    }// Se o passo for 0
    else if (passo.value <= 0) {
        alert("Passo inválido, PASSO 1 ATRIBUÍDO")
        passo.value = 1
    }
    else{
        resultado.innerHTML = "Contando... <br>"
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        var res = Number(resultado.value)
        if (i < f){
            //contagem crescente
            for (var cont = i; cont <= f; cont+=p){
                resultado.innerHTML += `${cont} \u{1F449}` 
            }
            resultado.innerHTML += `\u{1F3C1}`
        } else{
            //contagem regressiva
            for(var cont = i; cont >= f; cont-=p){
                resultado.innerHTML += `${cont} \u{1F449}`
            }
            resultado.innerHTML += `\u{1F3C1}`
        }
        
    }
    
    
}