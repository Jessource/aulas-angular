import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ModuloAngularComponent } from './modulo-angular/modulo-angular.component';
import { Cliente } from './tamplate/cliente/cliente';
import { ClienteComponent } from './tamplate/cliente/cliente.component';
import { TamplateModule } from './tamplate/tamplate.module';
import { FormatarMoedaPipe } from './formatar-moeda.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FormatarMoedaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TamplateModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
