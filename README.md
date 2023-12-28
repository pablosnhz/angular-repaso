# Curso

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

// PRIMERA PARTE

Creacion de componentes, directivas y ciclos de vida.

Hicimos uso de Input, para la llamada del componente padre al hijo y el Ouput del hijo al padre. Donde tambien utilizamos tanto ngClass como NgStyle para los estilos, ngClass para el condicionamiento de una funcion si se cumple podria modificar estilo y el NgStyle para agregar valores y asi hacer uso de ellos.
NgModel para hacer referencia a una propiedad del componente que se va a ver reflejado en la vista, implementando los banding tanto como Property [] y Event () tambien hice el import del FormModule para esto mismo.
Utilizamos las llaves de interpolacion para hacer llamados de variables para incoporar valores de diversas variables definidas.
EventEmitter que envia un evento al padre donde podria ser de tipo emit con algun mensaje, subscribe o unsubscribe y recibir ese evento donde sea enviado, se muestra mediante un evento emiter en el html.
Implementamos en el ts OnInit para los ciclos de vida de un componente el cual da inicio una vez iniciado el componente que seria la importacion de un input o output haciendo referencia a otro componente. onChanges para detectar cambios dentro de los componentes y el onDestroy, componentes que aparecen o desaparecen que se podria decir por una condicion booleana.

// SEGUNDA PARTE

Creacion de Modulos y su interaccion

Generamos modulos, que lo vinculamos con su componente para luego exportarlo y asi hacer uso de el en otros componentes. Ese modulo que generamos lo declaramos en el module principal. Por defecto esta el module principal, el que generamos lo vinculamos con el principal, lo importamos con su name, pero el que generamos deberia ir tambien declarado en el componente que creamos para ese modulo, osea su componente principal del ts, va en el module que creamos, no el que esta por defecto. Como vinculamos el componente con el modulo? lo importamos como dijimos como lo pusimos en declarations, tambien hay que ponerlo en exports para vincularlo con el module principal.
Vimos directivas como NgClass, que sirve con condiciones si no se cumple una puede ser otra que tambien puede ser true o false si quisiese, NgStyle en el cual podemos definir valores de css y lo declaramos en el ngstyle, tambien hicimos uso de NgIf, NgFor y NgSwitch.
NgIf si se cumple esa condicion se va a iniciar una accion, NgFor itera sobre elementos a mostrar, NgSwitch condiciones que podria tener varias condiciones y en base a eso podria ser una correcta.
ngContainer y ngTemplate van a aparecer si se cumple una condicion, de no cumplirse ngContainer, el else nos mostrara la otra opcion ngTemplate. Donde podria decirse que con ngFor por ejemplo, sino carga esos productos, va a aparecer el ng template diciendo que no hay productos en relacion con lo que decia, si no se cumple una condicion de mostrar productos, se va a mostrar la otra.

// TERCERA PARTE
