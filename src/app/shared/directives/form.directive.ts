import { Directive, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { colorTypeModel } from '../models/Shared.model';

@Directive({
  selector: '[appForm]'
})
export class FormDirective {

  @Input() parentForm: FormControl | undefined;
  @Input() label?: string;
  @Input() color: colorTypeModel = 'none';
  @Input() placeholder: string = '';
  @Input() icon?: string;
  @Input() appearance: MatFormFieldAppearance = 'fill';

}
