**INSTITUTO TECNOLÓGICO DE NUEVO LAREDO**  
7°A | *Ing. Sistemas Computacionales*  
DESARROLLO API REST | Ing. Gerardo Pineda Zapata  
Ezequiel Cantú de la Rosa, **19100155**  
29/08/2022


# Métodos *HTTPS*
Los HTTP *post request* o *métodos* HTTP de petición son solicitudes que se realizan para realizar una acción en un recurso concreto, como puede ser el acceso a una página concreta o el envío de los datos de un formulario web.

Las peticiones HTTP consisten en una serie de mensajes que un cliente web realiza y que conllevan una acción en el servidor web a las que se dirigen. Estos mensajes pueden ir acompañados de distintos parámetros con la intención de que el servidor web comprenda mejor qué es lo que se le solicita. 
<br/><br/><br/>

### - **GET**
Es empleado para leer una representación de un *resource*. En caso de respuesta positiva (200 OK), GET devuelve la representación en un formato concreto. En caso de respuesta negativa devuelve 404 (not found) o 400 (bad request). <br/>
*E j e m p l o* 

~~~
<form action="www.misitioweb/index.html" method="get">
    Nombre: <input type="text" name="nombre"><br>
    Apellido: <input type="text" name="apellido"><br>
    <input type="submit" value="Enviar">
</form>
~~~

<br/>

### - **POST**

Aunque se puedan enviar datos a través del método GET, en muchos casos se utiliza POST por las limitaciones de GET. En caso de respuesta positiva devuelve 201 (created). Y al igual que GET, 200 en caso de respuesta positiva, 404 o 400 para *NOT FOUND* o *BAD REQUEST* respectivamente.
<br/>

*E j e m p l o* 

~~~
<form action="www.misitioweb/index.html" method="post">
    Nombre: <input type="text" name="nombre"><br>
    Apellido: <input type="text" name="apellido"><br>
    <input type="submit" value="Enviar">
</form>
~~~

<br/>

### - **PUT**
Utilizado normalmente para actualizar contenidos, pero también para crearlos. Tampoco muestra ninguna información en la URL. En caso de éxito devuelve 201 (created, en caso de que la acción haya creado un elemento) o 204 (no response, si el servidor no devuelve ningún contenido).
<br/>
**Nota**<br/>
A diferencia de POST, si se crea o edita un resource con PUT y se hace el mismo request otra vez, el resource mantiene el mismo estado que en la primera llamada. Si con una llamada PUT se cambia aunque sea sólo un contador en el resource, la llamada ya no es idempotente, ya que se cambian contenidos.

<br/>

### - **DELETE**
Simplemente elimina un resource identificado en la URI. Si se elimina correctamente devuelve 200 junto con un body response, o 204 sin body. DELETE, al igual que PUT y GET, también es idempotente.

<br/>

### - **HEAD**
Es idéntico a GET, pero el servidor no devuelve el contenido en el HTTP response. Cuando se envía un HEAD request, significa que sólo se está interesado en el código de respuesta y los headers HTTP, no en el propio documento. Con este método el navegador puede comprobar si un documento se ha modificado, por razones de caching. Puede comprobar también directamente si el archivo existe.
<br/><br/>
*E j e m p l o* 

Si tienes muchos enlaces en tu sitio web, puedes enviar un HEAD request a todos los enlaces para comprobar los que estén rotos. Es bastante más rápido que hacerlo con GET.


<br/><br/>
### - **OPTIONS**
Solicita al servidor que informe sobre los distintos métodos que un archivo soporta. Al realizar esta petición OPTIONS sobre un archivo, el servidor responderá con una serie de datos, y bajo el campo *“allow”* incluirá todos los métodos HTTP que soporta ese archivo.

<br/><br/>
### - **TRACE**
Se trata de un método HTTP de petición muy interesante, ya que permite obtener la ruta que sigue una HTTP request durante todo su camino (desde que se realiza, hasta que llega al servidor y vuelve de regreso al cliente).
<br/><br/>
*E j e m p l o* 

Un ejemplo de este tipo de petición lo tenemos ejecutando desde Windows el comando tracert en la consola. Siguiendo a este comando de una URL se recibirá la ruta que sigue la petición hasta el servidor y de vuelta al cliente.