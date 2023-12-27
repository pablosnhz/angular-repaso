import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';



@NgModule({
  declarations: [
    ListaBasicaComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    // exportamos clasess clasesss componentes pipes, services
    // a quien importe es modulo
    ListaBasicaComponent,
  ]
})
export class ListsModule { }
