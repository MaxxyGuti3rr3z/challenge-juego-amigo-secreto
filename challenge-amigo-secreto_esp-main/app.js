//Array para los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();// trim() remueve los espacios de un string 
    if (nombre === ""){
        alert("El nombre no puede estar vacío");
    } else {
        amigos.push(nombre);
    }
    limpiarCaja();
    mostrarAmigos()
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

function mostrarAmigos() {
    let amigoMostrado = document.getElementById("listaAmigos");
    let contenido = "";
    for (let i = 0; i < amigos.length; i++) {
        contenido += "<li>" + amigos[i] + "</li>";
    }
    amigoMostrado.innerHTML = contenido;
}

function sortearAmigo(){
    if (amigos.length === 0){
        //Si la lista esta vacia se muestra una alerta
        alert("Por favor agregue algunos amigos");
    }else{
        //Sino se ejecuta el sorteo
        let indiceAmigo = Math.floor(Math.random() * amigos.length);
        document.getElementById("resultado").innerHTML = amigos[indiceAmigo];
    }
}



