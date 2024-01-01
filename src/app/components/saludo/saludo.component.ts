import { Component, EventEmitter, Input, Output } from '@angular/core';

export type Producto = {
  nombre: string,
  precio: number,
  descripcion: string,
}

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
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
