import { Component, OnInit } from '@angular/core';

// creamos un tipo base para el ejemplo
export type Producto = {
  nombre: string,
  precio: number,
  description: string
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent implements OnInit {

  listaElementos: Producto[] = [
    {
      nombre: 'Leche',
      precio: 10,
      description: 'Leche entera'
    },
    {
      nombre: 'Carne',
      precio: 20,
      description: 'Carne de Cerdo'
    }
  ];

  cargando: boolean = true;

  opcion: number = 0;

  ngOnInit(): void {
  }

  cambiarCargando(){
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcionEscogida: number){
    this.opcion = opcionEscogida; // el valor cambia, implica cambios en elemts renderizados
  }
}
