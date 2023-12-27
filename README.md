# Curso

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

Primera Parte

Creacion de componentes, directivas y ciclos de vida.

Hicimos uso de Input, para la llamada del componente padre al hijo y el Ouput del hijo al padre. Donde tambien utilizamos tanto ngClass como NgStyle para los estilos, ngClass para el condicionamiento de una funcion si se cumple podria modificar estilo y el NgStyle para agregar valores y asi hacer uso de ellos.
NgModel para hacer referencia a una propiedad del componente que se va a ver reflejado en la vista, implementando los banding tanto como Property [] y Event () tambien hice el import del FormModule para esto mismo.
Utilizamos las llaves de interpolacion para hacer llamados de variables para incoporar valores de diversas variables definidas.
EventEmitter que envia un evento al padre donde podria ser de tipo emit con algun mensaje, subscribe o unsubscribe y recibir ese evento donde sea enviado, se muestra mediante un evento emiter en el html.
Implementamos en el ts OnInit para los ciclos de vida de un componente el cual da inicio una vez iniciado el componente que seria la importacion de un input o output haciendo referencia a otro componente. onChanges para detectar cambios dentro de los componentes y el onDestroy, componentes que aparecen o desaparecen que se podria decir por una condicion booleana.

Para la segunda parte

Creacion de Modulos y su interaccion

Generamos modulos, que lo vinculamos con su componente para luego exportarlo y asi hacer uso de el en otros componentes. Ese modulo que generamos lo declaramos en el module principal.
