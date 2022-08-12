import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { LoginComponent } from './login.component';
import { RegisterUnknownComponent } from './register-unknown/register-unknown.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginComponent, 
    children:
      [
        {path: '', component: LoginComponent,}
      ] 
  },
  {
    path: 'register', 
    component: RegisterUnknownComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes),CoreModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }