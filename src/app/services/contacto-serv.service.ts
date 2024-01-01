import { Injectable } from '@angular/core';

import { CONTACTO } from '../mock/contactos.mock';
import { IContacto } from '../models/contacto.interface';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoServService {

  constructor() { }

  ObtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(CONTACTO);
  }

  obtenerContactoId(id: number): Observable<IContacto> | undefined{
    const contacto = CONTACTO.find((contacto: IContacto)=> contacto.id === id);

    let observable: Observable<IContacto> = new Observable(observer => {
      observer.next(contacto);
      observer.complete();
    })

    if(contacto){
      return observable
    } else {
      return;
    }
  }

  // pruebas

  ObtenerContactoNombre(nombre: string): Observable<IContacto> | undefined {
    const nombreContacto = CONTACTO.find((nombreContacto: IContacto)=> nombreContacto.nombre === nombre );

    let contax: Observable<IContacto> = new Observable(observer => {
      observer.next(nombreContacto);
      observer.complete();
    })

    if(nombreContacto){
      return contax
    } else {
      return
    }
  }

}
