import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* componentes */
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent
  ]
})
export class PublicModule { }
