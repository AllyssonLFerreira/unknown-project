import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{path: '', component: DashboardComponent}]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes),CoreModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }