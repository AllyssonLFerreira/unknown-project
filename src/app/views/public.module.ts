import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    DashboardModule,
    NgxSkeletonLoaderModule
  ]
})
export class PublicModule { }
