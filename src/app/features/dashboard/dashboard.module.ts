import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from "../../core/modules/material.module";
import { CardGamesComponent } from './card-games/card-games.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CardGamesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ]
})
export class DashboardModule { }
