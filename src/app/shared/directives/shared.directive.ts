import { Directive, Input } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { colorTypeModel } from '../models/Shared.model';

@Directive({
  selector: '[appDirectives]'
})
export class SharedDirective {
  
  @Input() label?: string;
  @Input() appearance: MatFormFieldAppearance = 'fill';
  @Input() color: colorTypeModel = 'none';
  @Input() placeholder: string = '';
  @Input() name?: string;
  @Input() icon?: string;
  @Input() text!: string;

}
