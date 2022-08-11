import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormDirective } from 'src/app/shared/directives/form.directive';
@Component({
  selector: 'app-shared-input-field',
  templateUrl: './shared-input-field.component.html',
  styleUrls: ['./shared-input-field.component.scss']
})
export class SharedInputFieldComponent extends FormDirective {

  constructor() { super() }

}
