import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Curso';
  user = '@Cipper';

  recibirMensajeHijo(evento: string){
    alert(evento);
  }
}
