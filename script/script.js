function encriptar(){
    var originalText= document.getElementById("blockText").value;
    var divEmpty = document.getElementById("blockEmpty");
    var divFull = document.getElementById("blockFull");
    if (originalText === "") {
        console.log("El campo de texto original está vacío");
        divEmpty.style.display = "block";
        divFull.style.display = "none";
        return;
    }
    divEmpty.style.display = "none";
    divFull.style.display = "block";
    var encryptedText = originalText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("blockTextShow").value = encryptedText;
}

function desencriptar() {
    var divEmpty = document.getElementById("blockEmpty");
    var divFull = document.getElementById("blockFull");
    var encryptedText = document.getElementById("blockText").value;
    if (encryptedText === "") {
        console.log("El campo de texto encriptado está vacío");
        divEmpty.style.display = "block";
        divFull.style.display = "none";
        return;
    }

    divEmpty.style.display = "none";
    divFull.style.display = "block";
    var decryptedText = encryptedText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("blockTextShow").value = decryptedText;
}

function copyResult() {
    var resultText = document.getElementById("blockTextShow").value;
    navigator.clipboard.writeText(resultText);
}