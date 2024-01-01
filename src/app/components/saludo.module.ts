import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludoComponent } from './saludo/saludo.component';
import { DatosComponent } from './datos/datos.component';
import { PeticionComponent } from './peticion/peticion.component';



@NgModule({
  declarations: [
    SaludoComponent,
    DatosComponent,
    PeticionComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SaludoComponent,
  ]
})
export class SaludoModule { }
