const reglasEncriptacion = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat',
};


let busqueda = /[aeiou]/g;


function reemplazar(vocales) {
    return reglasEncriptacion[vocales];
  }

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function encriptador() {

    let textoEscrito = document.getElementById('texto').value;
    let seEncripta = textoEscrito.replace(busqueda, reemplazar);
    let letraMinuscula = seEncripta.toLowerCase(seEncripta);
    
    
        if (mayusculasOEspeciales(textoEscrito)) {
        alert("Error: La palabra no debe contener mayúsculas ni caracteres especiales.");
        } else {
            asignarTextoElemento('p',letraMinuscula);
            console.log(letraMinuscula);
            document.getElementById("boton").style.display = "block";
        }

    document.getElementById("ocultar").style.display = "none";
}

function desencriptador() {
    let textoEscrito = document.getElementById('texto').value;
    let seDesencripta = textoEscrito.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    let letraMinuscula = seDesencripta.toLowerCase(seDesencripta);

    if (mayusculasOEspeciales(textoEscrito)) {
        alert("Error: La palabra no debe contener mayúsculas ni caracteres especiales.");
        } else {
            asignarTextoElemento('p',letraMinuscula);
            console.log(letraMinuscula);
            document.getElementById("boton").style.display = "block";
        }
    
    document.getElementById("ocultar").style.display = "none";
}

function mayusculasOEspeciales(palabra) {
    // Verifica si la palabra contiene mayúsculas o caracteres especiales
    return /[A-Z!@#$%^&*()_+{}\[\]:;<>,.?~\\/]/.test(palabra);
  }


function copiarTexto() {
    let textoACopiar = document.getElementById("textoACopiar");
    let boton = document.getElementById("boton");

    //Con el objeto "navigator.clipboar" escribimos lo que contiene el texto a copiar
    navigator.clipboard.writeText(textoACopiar.textContent);
    //Se cambia el mensaje del botón para mostrar que el texto ha sido copiado
    boton.textContent = "Copiado";
}

  

  