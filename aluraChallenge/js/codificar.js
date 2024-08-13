
var botonCodificar = document.getElementById("btn-co");
var botonDecodificar = document.getElementById("btn-de");
var botonCopiar = document.getElementById("btn-cy");

function oculta(id){
    var elDiv = document.getElementById(id);
    elDiv.style.display='none'; 
}

function muestra(id){
    var elDiv = document.getElementById(id); 
    elDiv.style.display='grid';
}

document.addEventListener("keydown", event => {
   if(event.keyCode == 8){ //Tecla backspace
		var texto = document.getElementById("text-in").value;
		if(texto.length == 0) {
			oculta("second-screen");
			muestra("first-screen");
		}
   }
});


botonCopiar.addEventListener("click", function(event){
	event.preventDefault();
	var content = document.getElementById("text-out");
    content.select();
    document.execCommand("copy");
	alert("use ctrl+v para pegar el contenido o lado derecho del mouse");
	document.getElementById("text-in").value = "";
	oculta("second-screen");
	muestra("first-screen");
});

botonCodificar.addEventListener("click", function(event){
	event.preventDefault();
	var texto = document.getElementById("text-in").value;
		
	if(texto.length == 0) {
		alert("Ingrese texto a encriptar");
		oculta("second-screen");
		muestra("first-screen");
	}
	else {
		
		if(verificarCadena(texto) == true) {
			document.getElementById("text-out").value = encriptarTexto(texto);
			oculta("first-screen");
			muestra("second-screen");
		}
		else {
			document.getElementById("text-in").value = "";
		}
	}
});

botonDecodificar.addEventListener("click", function(event){
	event.preventDefault();
	oculta("first-screen");
	muestra("second-screen");
	var content = document.getElementById("text-in").value;
	if(content.length == 0)  {
		oculta("second-screen");
		muestra("first-screen");
		alert("Ingrese texto a desencriptar");
	}
	else {
		document.getElementById("text-out").value = desencriptarTexto(content);
	}
});

function encriptarTexto(textoIn) {
	var i = 0;
	var cadena = "";
	while (i < textoIn.length) {
		
		switch (textoIn[i]) {
			case "e":
				cadena += "enter";
				break;
			case "i":
				cadena += "imes";
				break;
			case "a":
				cadena += "ai";
				break;
			case "o":
				cadena += "ober";
				break;
			case "u":
				cadena += "ufat";
				break;
			default:
				cadena += textoIn[i];
		}
		i++;
	}
	return cadena; 
}

function desencriptarTexto(textoIn) {

	var cadena = "";
	
	cadena = textoIn.replace(/ai/g,'a');
	cadena = cadena.replace(/enter/g,'e');
	cadena = cadena.replace(/imes/g,'i');
	cadena = cadena.replace(/ober/g,'o'); 
	cadena = cadena.replace(/ufat/g,'u');

	return cadena;
} 

function verificarCadena(textoIn) {
	var verificar = true;
	if(/^[a-z ]+$/.test(textoIn) == false) {
		alert("Solo letras minúsculas y sin acentos");
		verificar = false;
	}
	return verificar;
}