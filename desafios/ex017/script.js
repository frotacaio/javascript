function geraTabuada(){
    var objnum = document.getElementById("txtnum")
    var tab = document.getElementById("seltab")
    var num = Number(objnum.value)
    console.log(num)
    if (objnum.value == ""){
        alert("Digite um número")
    }else{
        tab.innerHTML = ""
        for(var cont = 0; cont <=10; cont++){
            var item = document.createElement("option")
            var tabu = (num * cont) 
            item.text = (`${num} X ${cont} = ${tabu}`)
            tab.appendChild(item)
        }
    }

}