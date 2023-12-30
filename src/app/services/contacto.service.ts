import { Injectable } from '@angular/core';

// importamos la lista de contactos MOCK
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

// importamos observable de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }


  obtenerContactos(): Promise<IContacto[]> {
    // return CONTACTOS;
    return Promise.resolve(CONTACTOS);
  }


  obtenerContactoId(id: number): Observable<IContacto> | undefined {
    // buscamos contacto por id dentro de la lista mockeados contactos
    const contacto = CONTACTOS.find((contacto: IContacto) => contacto.id === id);

    // creamos un observable
    let observable: Observable<IContacto> = new Observable(observer => {
      observer.next(contacto); // emitir un valor a todo componente suscrito
      observer.complete(); // no emitimos mas valores, cierra observable
    })


    if(contacto){
      return observable;
    } else {
      return;
    }

  }
}
