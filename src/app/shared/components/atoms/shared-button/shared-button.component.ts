import { Component, Input } from '@angular/core';
import { SharedDirective } from 'src/app/shared/directives/shared.directive';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss']
})
export class SharedButtonComponent extends SharedDirective {

  constructor() { super() }
  /* Diretiva isDisabled ???? */

}
