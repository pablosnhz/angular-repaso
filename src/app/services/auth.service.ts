import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any>{

    let body = {
      email: email,
      password: password
    }

    // devolvemos la respuesta del observable cuando la peticion http,
    // se complete, el componente suscrito accedera al token de http
    return this.http.post('https://reqres.in/api/login', body)

  }
}
