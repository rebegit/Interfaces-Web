README:

ACTIVIDAD:

[Primero, saca un fork del proyecto que hiciste en grupo (ahora trabajaremos sobre él pero de forma individual). Trabajarás sobre este fork ahora en tu propio repositorio, que deberá ser privado (sólo el profesor tendrá acceso). Explica (en el readme) y realiza los siguientes puntos:

1. Crea un logo propio (utilizando herramientas vistas en clase)
2. Reemplaza las imágenes por otras con licencia CC y eligiendo justificadamente el formato y tipo (vector/raster)
3. Reduce el peso de las imágenes de la web (recuerda mantener una copia de las originales)
4. Aplica al menos un par de estilos a las imágenes, para ello puedes servirte de esta documentación.
5. Añade un audio aceptado por el estándar W3C. Si se visualiza en un navegador que no interpreta HTML5, haz que sea compatible.
6. Añade un vídeo corto y otro largo con la precarga que consideres más adecuada en cada caso. No uses los controles por defecto, en su lugar añade otros personalizados.
7. Añade al menos una animación a una imagen usando transform (tenéis que investigarlo)
8. Añade al menos una transición usando steps.
9. Añade un dialog cuyo fondo oculte el resto de la página
10. Crea una guía de estilo para la aplicación (en caso de haberla creado previamente, actualizala con lo que creas conveniente para realizar la práctica)
]

MIS INSTRUCCIONES Y RESPUESTAS: 
Todos los nuevos cambios realizados para esta actividad están en HOME.html
He creado una carpeta "otros" donde estarán todos los añadidos: 

1. Logotipo creado en GIMP en png, añadiendo texto también

2. En https://search.creativecommons.org/ descargo imágenes con licencia CC vectorizadas en png puesto que son iconos y la extensión png es ideal para iconos, logos e imágenes con colores planos en web

3. Reducir peso= de png a jpg. Todos los png anteriores se guardaran como: “xxxxxmenospeso.jpg”. También están las originales en la carpeta.

4. Se han aplicado multitud de estilos= border-ratius, hover, opacity, transform....

5. Audio usando estándar W3C. Compatible con navegadores. (Empieza a sonar en 4-5 segundos).

6. Inserto 2 videos, uno corto y otro largo. Ambos que soportan otros navegadores, y ambos tienen diferentes propiedades.

7. Animación a imagen del logo usando también transform.

8. Transición p del footer con steps= cambio de tamaño y color.
 
9. Añado un botón que abre un dialog casi al final de la web, (antes del footer), una vez qu se abre éste, oculta el resto de la página la parte proporcional. Inserto en él texto, una imagen y un botón que lo cierra.

11. GUÍA DE ESTILO:

• Usar siempre minúscula
• Eliminar los espacios en blanco innecesario, sobre todo al final de las líneas
• Comentarios cuando sean necesarios (sin excederse)
• Usar los tags de HTML para lo que realmente son.
• Usar una línea nueva para cada bloque.
• Usar comillas dobles a las simples
• Usar nombres con sentido e identificadores en los CSS
• Usar propiedades cortas cuando sea posible (en CSS)
• Usar identificadores y clases.
• Usar “;” al terminar cada declaración en CSS
• Usar una nueva línea para cada declaración (en lugar de apilarlas todas bajo una misma línea)
• Dejar una línea entre cada declaración

Todas las páginas del sitio web contaran con el fondo de imagen "fondo-contacto.jpg", con una pantalla opaca de color blanco sobre la que se compondrá el contenido de la web.
Los colores utilizados son los identificativos de la marca (Azul: rgb(34,96,178),Amarillo: rgb(245, 245, 5), Blanco: rgb(255, 255, 255)).
Todas las paginas contarán con un "footer".

Además, algunos ejemplos de guía de estilo en concreto de esta práctica en HOME  son:
-Los titulos de los enunciados tendran un estilo igual de tamaño, color, sombras...:
    font-weight: bolder;
    font-size: 25px;
    text-align: center;
    color: #920044;
    clear: both;
    text-shadow: 2px 2px #b9dbf2; 
    (...)
-los recuadros de las asignaturas también tienen un estilo propio:
    width: 80%;
    height: 250px;
    margin: 25px 1% 0px 2%;
    border: 10px solid rgb(252, 197, 43);
    border-radius: 50%;
    (...)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



INFORMACIÓN WEB:
# tienda_cesur
# Tienda de Cursos de Cesur.

*Nuestro cliente contratará el servicio de un servidor apache en el cual volcaremos los ficheros de nuestra pagina.*

*HOME*
#Realizamos una web para la contratacion de cursos de Cesur, en la cual se observa los enlaces a diferentes zonas de nuestro sitio web. En la primera fila podremos observar los cursos destacados del centro y desplazando el raton sobre ellos podremos ver su precio y solicitar mas información.
En la segunda linea encontramos las nuevas ofertas que nuestro cliente quiera indicar y de la misma manera que la linea anterior, pasando el ratón sobre la imagen aparecerá el precio y el boton de solicitud.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*Login*
#En la ventana de Login, nos aparece un formulario que da acceso a la plataforma de alumno de cesur el cual nos solicita nuestro Email el cual tendra que tener una estructura (ejemplo@ejemplo.com), el cual realiza una validacion de dicho campo contenida en el fichero *login.html*. Cuenta además con el requerimiento de que el campo "Contraseña" tiene que estar relleno. Cuenta ademas con un enlace el cual nos regresa a la página principal

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*Registro*
#En esta ventana encontraremos un formulario que permitirá hacer el registro de un nuevo usuario en nuestra base de datos. El formulario cuenta con una aparición con barrido realizada mediante CSS y realizará validaciones en html para requerir que todos los campos esten rellenos. Ademas realizará una validación para comprobar que el email introducido tenga la estructura correcta y para que las contraseñas introducidas ademas de ser iguales, sean de minimo 8 caracteres, incluyendo mayúsculas, minusculas y números, los cuales se pueden consultar en el archivo "registro.html", "cssregistro.css" y "registro.js". Contamos con un botón de registro que realizará dichas validaciones y enviará la informacion a la base de datos. Contamos con un enlace en la parte inferior por si el usuario se equivocase y ya estuviese registrado.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*Contacto*
#En la pagina de Contacto, encontraremos un formulario que tambien aparecera con un barrido mediante CSS y el cual solicitará informacion al usuario, además de tener que indicar mediante un desplegable el motivo del contacto. Se han de aceptar las condiciones y rellenar todos los campos para que el boton "Submit" sea desbloqueado y accesible por el usuario. Tambien contamos con un boton que nos permitirá resetear el formulario si se han introducido datos erroneos. En este formulario las validaciones se realizaran sobre la estructura del correo electronico, aceptar las politicas del Sitio Web, la longitud del telefono introducido, seleccionar un motivo de contacto y longitud del nombre de usuario, las cuales se pueden consultar en el archivo "contacto.js".
