import { Directive, Input } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { colorTypeModel, imageTypeModel } from '../models/Shared.model';

@Directive({
  selector: '[appDirectives]'
})
export class SharedDirective {
  
  @Input() name?: string;
  @Input() icon?: string;
  @Input() text!: string;
  @Input() href!: string;
  @Input() image!: string;
  @Input() color: colorTypeModel = 'none';
  @Input() imageType: imageTypeModel = 'mat-icon';
}
