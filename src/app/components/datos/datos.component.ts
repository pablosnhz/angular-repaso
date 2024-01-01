import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoServService } from './../../services/contacto-serv.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit, OnDestroy {

  listaContactos: IContacto[] = [];

  contactoSeleccionado: IContacto | undefined;

  suscripcion: Subscription | undefined;

  constructor(private ContactoServService: ContactoServService){}


  ngOnInit(): void {
    this.ContactoServService.ObtenerContactos()
    .then((lista: IContacto[])=> this.listaContactos = lista)
    .catch((error)=> console.log(`Ocurrio un error ${error}`))
    .finally(() => console.log(`Finalizo con exito`))
  }

  obtenerContacto(id: number){
    this.suscripcion = this.ContactoServService.obtenerContactoId(id)?.subscribe(
      (contacto: IContacto) => this.contactoSeleccionado = contacto
    )
  }

  ngOnDestroy(): void {
    this.suscripcion?.unsubscribe;
  }

  obtenerContactoName(nombre: string){
    this.suscripcion = this.ContactoServService.ObtenerContactoNombre(nombre)?.subscribe(
      (contax: IContacto) => this.contactoSeleccionado = contax
    )
  }

}



