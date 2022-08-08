import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDirective } from './directives/shared.directive';
import { MaterialModule } from '../core/modules/material.module';
/* componentes */
import { IconsModule } from '../core/modules/icons.module';
import { SharedInputFieldComponent } from './components/atoms/shared-input-field/shared-input-field.component';
import { SharedButtonComponent } from './components/atoms/shared-button/shared-button.component';
import { SharedHeaderComponent } from './components/organisms/shared-header/shared-header.component';
import { SharedFooterComponent } from './components/organisms/shared-footer/shared-footer.component';
import { SharedLinkFieldComponent } from './components/atoms/shared-link-field/shared-link-field.component';

@NgModule({
  declarations: [
    SharedInputFieldComponent,
    SharedDirective,
    SharedButtonComponent,
    SharedHeaderComponent,
    SharedFooterComponent,
    SharedLinkFieldComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    IconsModule
  ],
  exports: [
    SharedInputFieldComponent,
    SharedButtonComponent,
    SharedHeaderComponent,
    SharedFooterComponent,
    SharedLinkFieldComponent
  ]
})
export class SharedModule { }
