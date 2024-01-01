import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//IMPORT
import { SaludoModule } from './components/saludo.module';
=======
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { FormsModule } from '@angular/forms';

// Module importado
import { ListsModule } from './modules/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
>>>>>>> f13e8a6d3591ab9caeba7b93449787b8f9ff4945

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SaludoModule,

    // HTTP
=======
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
>>>>>>> f13e8a6d3591ab9caeba7b93449787b8f9ff4945
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
