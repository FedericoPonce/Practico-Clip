function adivinanza(){
    let intentos = document.getElementById("intentos").textContent;
    let inputRespuesta = document.getElementById("inputRespuesta");
    let respuesta = inputRespuesta.value;
    
    
    if(respuesta == "Soda Stereo" && intentos != 0){
        document.getElementById("Acertaste").style.display="block"
        document.getElementById("labelInput").hidden=true
        document.getElementById("boton").hidden=true
        document.getElementById("inputRespuesta").hidden=true
        document.getElementById("inputRespuesta").value=""
        document.getElementById("Resolucion").style.display="block"
    }else{
        intentos=intentos-1;
        document.getElementById("intentos").innerHTML=intentos
        document.getElementById("inputRespuesta").value=""
        
    }
    switch (intentos) {
        case 3:
            
            break;
        case 2:
            document.getElementById("pista1").style.display="block"
            document.getElementById("pista2").style.display="block"
            break;
        case 1:
            document.getElementById("pista3").style.display="block"
            document.getElementById("pista4").style.display="block"
            break;
        case 0:
            document.getElementById("Erraste").style.display="block"
            document.getElementById("boton").hidden=true;
            document.getElementById("inputRespuesta").hidden=true;
            document.getElementById("labelInput").hidden=true
            break;
    }
    

}
