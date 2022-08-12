import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDirective } from './directives/shared.directive';
import { FormDirective } from './directives/form.directive';
import { MaterialModule } from '../core/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
/* componentes */
import { SharedInputFieldComponent } from './components/atoms/shared-input-field/shared-input-field.component';
import { SharedButtonComponent } from './components/atoms/shared-button/shared-button.component';
import { SharedHeaderComponent } from './components/organisms/shared-header/shared-header.component';
import { SharedFooterComponent } from './components/organisms/shared-footer/shared-footer.component';
import { SharedLinkFieldComponent } from './components/atoms/shared-link-field/shared-link-field.component';
import { SharedTableComponent } from './components/organisms/shared-table/shared-table.component';

@NgModule({
  declarations: [
    SharedInputFieldComponent,
    SharedDirective,
    SharedButtonComponent,
    SharedHeaderComponent,
    SharedFooterComponent,
    SharedLinkFieldComponent,
    FormDirective,
    SharedTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    SharedInputFieldComponent,
    SharedButtonComponent,
    SharedHeaderComponent,
    SharedFooterComponent,
    SharedLinkFieldComponent,
    SharedTableComponent
  ],
})
export class SharedModule { }
