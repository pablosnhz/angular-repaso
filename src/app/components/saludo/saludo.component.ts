<<<<<<< HEAD
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type Producto = {
  nombre: string,
  precio: number,
  descripcion: string,
}
=======
import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input, EventEmitter, Output } from '@angular/core';
>>>>>>> f13e8a6d3591ab9caeba7b93449787b8f9ff4945

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
<<<<<<< HEAD
export class SaludoComponent {

  @Input() ola: string = 'Mañana';

  @Output() mensaje: EventEmitter<string> = new EventEmitter<string>;

  mensajeAMostrar(): void {
    this.mensaje.emit(`Que parte del dia estas? ${ this.ola }`)
  }

  myStyle: object = {
    fontSize: '10px',
    color: 'blue'
  }

  // SEGUNDA PARTE

  // NG IF

  cargando: boolean = true;

  cambiarCargando(){
    this.cargando = !this.cargando;
  }

  // NG FOR

  listaProductos: Producto[] = [{
    nombre: 'Papa',
    precio: 20,
    descripcion: 'Para hacer con milanesa'
  },{
    nombre: 'Yogurt',
    precio: 60,
    descripcion: 'Mejor con cereal!'
  },{
    nombre: 'Helado',
    precio: 10,
    descripcion: 'Palito bombon'
  }
]

// NG SWITCH

  opcion: number = 0;

  escogerOpcion(opcionEscogida: number){
    this.opcion = opcionEscogida;
  }
}
=======
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

  // padre llama al hijo, veni hijo, para traer input
  @Input() aloha: string = 'Don diego'

  // hijo llama al padre, ven padre, para llevar output
  @Output() paraEliminar: EventEmitter<string> = new EventEmitter<string>();

  aMostrar(){
    this.paraEliminar.emit(`este usuario se va a eliminar ${ this.aloha } `)
  }


  myStyle: object = {
    color: 'blue',
    fontSize: '20px',
  }

  ngOnInit(): void {
    console.log('ngOnInit implemented.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Valor anterior de', changes);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy implemented.');
  }

}


>>>>>>> f13e8a6d3591ab9caeba7b93449787b8f9ff4945
