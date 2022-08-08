import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* componentes */
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LoginComponent
  ]
})
export class PublicModule { }
