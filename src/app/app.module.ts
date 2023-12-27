import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { FormsModule } from '@angular/forms';

// Module importado
import { ListsModule } from './modules/lists.module';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    // module importado
    ListsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
