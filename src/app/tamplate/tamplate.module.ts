import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ClienteComponent } from './cliente/cliente.component';



@NgModule({
  declarations: [
    NavbarComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class TamplateModule { }
