import { Component } from '@angular/core';
import { SharedDirective } from 'src/app/shared/directives/shared.directive';

@Component({
  selector: 'app-shared-input-field',
  templateUrl: './shared-input-field.component.html',
  styleUrls: ['./shared-input-field.component.scss']
})
export class SharedInputFieldComponent extends SharedDirective {

  constructor() { super() }

}
