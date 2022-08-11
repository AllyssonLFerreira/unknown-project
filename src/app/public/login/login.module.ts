import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUnknownComponent } from './register-unknown/register-unknown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    RegisterUnknownComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
