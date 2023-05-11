const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.textContent = textoEncriptado;
    textArea.value = "";


}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            mensaje.style.backgroundImage = "none"
        }
    }
    if (stringEncriptada == "") {
        alert("No ingreso ningún texto")
        mensaje.style.backgroundImage = "url(imagenes/muñeco.png)";
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = textArea.value;
    const textoDesencriptado = desencriptar(textoEncriptado);
    mensaje.textContent = textoDesencriptado;
    textArea.value = "";

  }

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            
        }
    }
    if (stringDesencriptada == "") {
        alert("No ingreso ningún texto");
        mensaje.style.backgroundImage = "url(imagenes/muñeco.png)";

    }else{
        mensaje.style.backgroundImage = "none"
    }
    
    return stringDesencriptada;
}

