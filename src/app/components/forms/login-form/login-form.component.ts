import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private AuthService: AuthService){

  }

  ngOnInit(): void {
    this.AuthService.login('eve.holt@reqres.in', 'cityslicka').subscribe(
      (response) => {
        console.log('Respuesta login', response)
        // luego de ver que responde y trae el token, todo OK
        sessionStorage.setItem('token', response.token);
      },
      (error) => console.error(`Ha ocurrido un error en el proceso de login: ${error}`),
      ()=> console.log(`Se ha completado el llamado de login a REQRES`))
  }
}
