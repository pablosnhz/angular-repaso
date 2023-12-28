import { IContacto } from './../../models/contacto.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit, OnDestroy {

  // creamos una lista de contactos
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  // subscripcion de servicio
  subscripcion: Subscription | undefined;

  // inyectamos el service de contacto
  constructor(private ContactoService: ContactoService){
  }


  ngOnInit(): void {
    // obtener lista de contactos que tiene el servicio
    this.ContactoService.obtenerContactos()
      .then((lista: IContacto[]) => this.listaContactos = lista)
      .catch((error) => console.error(`Hubo un error al recuperar lista contacto: ${error}`))
      .finally(() => console.log(`Peticion de contactos terminada`));
    console.table(this.listaContactos);
  }

  obtenerContacto(id: number){
    // console.log(`Obtener info contacto ${id}`)
    this.subscripcion = this.ContactoService.obtenerContactoId(id)?.subscribe(
      (contacto: IContacto) => this.contactoSeleccionado = contacto)

  }

  ngOnDestroy(): void {
    this.subscripcion?.unsubscribe();
  }
}
