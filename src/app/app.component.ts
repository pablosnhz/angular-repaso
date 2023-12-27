import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Curso';
  user = '@Cipper';
  user1 = '@MyNameIsCheka';

  recibirMensajeHijo(evento: string){
    alert(evento);
  }

  vaAEliminar(evento: string){
    alert(evento);
  }

}
