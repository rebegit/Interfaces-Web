

function validaNombre(usuario){
   var usuario = document.getElementById("usernamesignup").value;
        if(usuario ==null) {


          alert('No has escrito nada en el usuario');
          
        }
}


function pruebaemail(valor){
   var valor=document.getElementById("emailsignup").value;

  let expresion=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  let correo=document.getElementById('emailsignup');
  if(!expresion.exec(valor)){
      alert('email no válido, rellenelo de nuevo');
     
      correo.value = ''; // Si no es correcto vaciamos la celda
      correo.style.backgroundColor="red"; // Y se colorea en rojo indicándolo

   
  }
}


function Fcontraseña(){
  var p1 = document.getElementById("contrasena1").value;
  var p2 = document.getElementById("contrasena2").value;
      
    //no campo vacio
    if (p1.length == 0 || p2.length == 0) {
        alert("Los campos de la contraseña no pueden quedar vacios");
        return false;
      }

    //ambas contraseñas coinciden
    if (p1 != p2) {
        alert("Las contraseñas deben de coincidir");
        return false;
      } else {
        alert("Contraseñas correctas");
        return true; 
      }
      
    }