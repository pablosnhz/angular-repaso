# Curso

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

// PRIMERA PARTE

Creacion de componentes, directivas y ciclos de vida.

Hicimos uso de Input, para la llamada del componente padre al hijo y el Ouput del hijo al padre. Donde tambien utilizamos tanto ngClass como NgStyle para los estilos, ngClass para el condicionamiento de una funcion si se cumple podria modificar estilo y el NgStyle para agregar valores y asi hacer uso de ellos.
NgModel para hacer referencia a una propiedad del componente que se va a ver reflejado en la vista, implementando los banding tanto como Property [] y Event () tambien hice el import del FormModule para esto mismo.
Utilizamos las llaves de interpolacion para hacer llamados de variables para incoporar valores de diversas variables definidas.
EventEmitter que envia un evento al padre donde podria ser de tipo emit con algun mensaje, subscribe o unsubscribe y recibir ese evento donde sea enviado, se muestra mediante un evento emiter en el html.
Event emitter si manda un evento que despues se hace uso de el con $event.
Implementamos en el ts OnInit para los ciclos de vida de un componente el cual da inicio una vez iniciado el componente que seria la importacion de un input o output haciendo referencia a otro componente. onChanges para detectar cambios dentro de los componentes y el onDestroy, componentes que aparecen o desaparecen que se podria decir por una condicion booleana.

// SEGUNDA PARTE

Creacion de Modulos y su interaccion

Generamos modulos, que lo vinculamos con su componente para luego exportarlo y asi hacer uso de el en otros componentes. Ese modulo que generamos lo declaramos en el module principal. Por defecto esta el module principal, el que generamos lo vinculamos con el principal, lo importamos con su name, pero el que generamos deberia ir tambien declarado en el componente que creamos para ese modulo, osea su componente principal del ts, va en el module que creamos, no el que esta por defecto. Como vinculamos el componente con el modulo? lo importamos como dijimos como lo pusimos en declarations, tambien hay que ponerlo en exports para vincularlo con el module principal.
Vimos directivas como NgClass, que sirve con condiciones si no se cumple una puede ser otra que tambien puede ser true o false si quisiese, NgStyle en el cual podemos definir valores de css y lo declaramos en el ngstyle, tambien hicimos uso de NgIf, NgFor y NgSwitch.
NgIf si se cumple esa condicion se va a iniciar una accion, NgFor itera sobre elementos a mostrar, NgSwitch condiciones que podria tener varias condiciones y en base a eso podria ser una correcta.
ngContainer y ngTemplate van a aparecer si se cumple una condicion, de no cumplirse ngContainer, el else nos mostrara la otra opcion ngTemplate. Donde podria decirse que con ngFor por ejemplo, sino carga esos productos, va a aparecer el ng template diciendo que no hay productos en relacion con lo que decia, si no se cumple una condicion de mostrar productos, se va a mostrar la otra.

// TERCERA PARTE

Para empezar creamos una Interface con datos de contactos, por el service solicitamos esos datos mediante una promesa de tipo contactos en este caso. mocks lista a exportar con los datos de los contactos, y la otra interface donde declaramos su tipo, en mocks declaramos una const como CONTACTO: IProducto[]; para hacer uso de la interface y el mock, lo importamos en el Service, este service nos va a dar margen para crear funciones para si luego mostrar su contenido en pantalla.
Inyectamos el servicio en el constructor de el componente ts a(si, lo llevamos a donde luego vamos a mostrar esos datos) manipular los datos que vamos a traer de esa funcion con la promesa.
Vamos a crear dos funciones en el service, una para traer los datos con una promesa y otra para buscar una lista de los empleados por su ID que lo hicimos mediante un find.
Implementamos el RXJS para manejar Observables, va a servir para darle circulacion de mostrar los diversos contactos con sus nombres, si no tuviera el observable, lo borro, que pasa? me aparecen en pantalla solo el nombre sin poder manipularlos para mostrar la informacion, por eso en el observable para hacer uso del next y asi poder mostrar por su id, los datos de los contactos.
Una vez llamado al service por en constructor para traer las funciones que nos traen los datos de las interfaces, en el ngOnInit vamos a obtener la lista de los contactos
