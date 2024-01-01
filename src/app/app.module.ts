import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//IMPORT
import { SaludoModule } from './components/saludo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SaludoModule,

    // HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
