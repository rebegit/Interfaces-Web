//Javascript formulario contacto
var ok=true;

var valor=document.getElementById("correo").value;

function pruebaemail(valor){
    let expresion=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    let correo=document.getElementById('correo');
    if(!expresion.exec(valor)){
        alert('email no válido, rellenelo de nuevo');
       
        correo.value = ''; // Si no es correcto vaciamos la celda
        correo.style.backgroundColor="red"; // Y se colorea en rojo indicándolo
        ok=false;
        
        
     
    }
}

function marcarBoton() {
    let nombre=document.getElementById("nombre");
    let correo=document.getElementById("correo");
	let but = document.getElementById('botoncito');
    
	
	if ((nombre.value != '')&&(correo.value!='')) {
		but.disabled = false;
	}
	else {
		but.disabled = true;
	}
}


function checkbox(){
    if(!document.getElementById('acepto').checked){
        alert("No ha aceptado las condiciones");
        ok=false;
    }
}

/*
Esta función no la implementamos pero es para mostrar como se incluiría el valor +34 ya por defecto en la cajetilla

function telefonoPredefinido(){
    document.getElementById('telefono').value = '+34';
    

}
*/

function telefonoLongitud(){
    
    if (document.getElementById('telefono').value.length != 9){
    alert("El telefono no está correctamente Introducido");

    let telefono=document.getElementById('telefono');
    document.getElementById('telefono').value = '';
        telefono.style.backgroundColor="red";
    ok=false;
}
}


function validaMotivo(){
    if(document.getElementById('motivo').value == ''){
        alert("Ha olvidado insertar el motivo de su consulta");
        ok=false;
    }
}

function validaNombre(){
    if(document.getElementById('nombre').value.length <2){
        let nombre=document.getElementById('nombre');
        alert("El nombre debe tener más de dos caracteres");
        document.getElementById('nombre').value = '';
        nombre.style.backgroundColor="red";

        ok=false;
    }
}

/*function confirmar() {
    
    if (ok===false){

        alert("Hay errores en el formulario, no se enviará");

    }else{

        if (!confirm("Estas seguro de enviar los datos de este formulario? Si te han aparecido errores no se enviarán correctamente")) {

            alert("El formulario no será enviado")

        } else {
            alert("formulario enviado")
    }
        
        
    }
}*/

