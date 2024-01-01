import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'proyectoBootcamp';

  estamos: string = 'Noche';

  paraVos(evento: string){
=======
  title = 'Curso';
  user = '@Cipper';
  user1 = '@MyNameIsCheka';

  mensajeDeEliminar(evento: string){
>>>>>>> f13e8a6d3591ab9caeba7b93449787b8f9ff4945
    alert(evento);
  }

}
