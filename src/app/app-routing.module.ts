import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/integration/Auth/auth.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterUnknownComponent } from './views/login/register-unknown/register-unknown.component';

const routes: Routes = [
  /* {
    path: '',
    loadChildren: () => import('./public/login/login.module').then(m => m.LoginModule),
  }, */
  {
    path: '',
    component: LoginComponent,
  },  
  {
    path: 'register',
    component: RegisterUnknownComponent,
  },  
  {
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
