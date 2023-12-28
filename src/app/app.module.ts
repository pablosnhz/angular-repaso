import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { FormsModule } from '@angular/forms';

// Module importado
import { ListsModule } from './modules/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    // module importado
    ListsModule,
    // importamos el modulo httpclientModule para hacer peticiones HTTP
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
