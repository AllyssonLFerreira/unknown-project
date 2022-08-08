import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDirective } from './directives/shared.directive';
import { MaterialModule } from '../core/modules/material.module';
/* componentes */
import { SharedInputFieldComponent } from './components/atoms/shared-input-field/shared-input-field.component';
import { SharedButtonComponent } from './components/atoms/shared-button/shared-button.component';
import { SharedHeaderComponent } from './components/organisms/shared-header/shared-header.component';
import { SharedFooterComponent } from './components/organisms/shared-footer/shared-footer.component';

@NgModule({
  declarations: [
    SharedInputFieldComponent,
    SharedDirective,
    SharedButtonComponent,
    SharedHeaderComponent,
    SharedFooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SharedInputFieldComponent,
    SharedButtonComponent,
    SharedHeaderComponent,
    SharedFooterComponent
  ]
})
export class SharedModule { }
