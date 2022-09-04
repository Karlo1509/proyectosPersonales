
    

window.onload= function(){
    var caja1 = document.getElementById("caja1")
    var intercambiar = document.getElementById("intercambiar")
    caja1.focus()
    caja1.onkeyup = (actualizar)
    intercambiar.onclick = function click(){intercambio();actualizar()}
    
} 
    
function actualizar() {
    var caja1 = document.getElementById("caja1")
    var caja2 = document.getElementById("caja2")
    var texto1 = document.getElementById("texto1")
    var texto2 = document.getElementById("texto2")
    var intercambiar = document.getElementById("intercambiar")
    if (caja1 != ""){
        if (texto1.textContent == "Desencriptado"){
            caja2.value = encriptar()
        }
        if (texto1.textContent == "Encriptado"){
            caja2.value = desencriptar()
        }
    }
}

function encriptar(){
    var caja1 = document.getElementById("caja1")
    var resultado = ""

    for(var i = 0; i < caja1.value.length; i++){
        if(caja1.value[i] != "a" 
        && caja1.value[i] != "e" 
        && caja1.value[i] != "i"
        && caja1.value[i] != "o" 
        && caja1.value[i] != "u")
        {resultado = resultado + caja1.value[i];}
        else {
        if(caja1.value[i]=="e"){resultado = resultado + "enter"}
        if(caja1.value[i]=="i"){resultado = resultado + "imes"}
        if(caja1.value[i]=="a"){resultado = resultado + "ai"}
        if(caja1.value[i]=="o"){resultado = resultado + "ober"}
        if(caja1.value[i]=="u"){resultado = resultado + "ufat"}}
    }
    return resultado
}

function desencriptar(){
    var caja1 = document.getElementById("caja1")
    var resultado = ""

    for(var i = 0; i < caja1.value.length; i++){
        if(caja1.value[i] != "a" 
        && caja1.value[i] != "e" 
        && caja1.value[i] != "i"
        && caja1.value[i] != "o" 
        && caja1.value[i] != "u")
        {resultado = resultado + caja1.value[i];}
        else {
        if(caja1.value[i]=="e"){
            resultado = resultado + "e";
            i = i + 4 ;
        }
        if(caja1.value[i]=="i"){
            resultado = resultado + "i";
            i = i + 3 ;
        }
        if(caja1.value[i]=="a"){
            resultado = resultado + "a";
            i = i + 1 ;
        }
        if(caja1.value[i]=="o"){
            resultado = resultado + "o";
            i = i + 3 ;
        }
        if(caja1.value[i]=="u"){
            resultado = resultado + "u";
            i = i + 3 ;
        }
        }
    }
    return resultado
}

function intercambio() {
    var caja1 = document.getElementById("caja1")
    var caja2 = document.getElementById("caja2")
    var texto1 = document.getElementById("texto1")
    var texto2 = document.getElementById("texto2")
    var copiartexto = ""
    caja1.value = caja2.value
    copiartexto = texto1.textContent
    texto1.textContent = texto2.textContent
    texto2.textContent = copiartexto
    caja1.focus()
}

