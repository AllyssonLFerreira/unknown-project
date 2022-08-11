import { Component, Input } from '@angular/core';
import { SharedDirective } from 'src/app/shared/directives/shared.directive';
import { buttonTypeModel } from 'src/app/shared/models/Shared.model';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss']
})
export class SharedButtonComponent extends SharedDirective {

  constructor() { super() }
  @Input() type: buttonTypeModel = 'simple';
  @Input() isDisabled: boolean = false;
  @Input() label?: string;
}
