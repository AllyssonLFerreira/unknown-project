import { Component } from '@angular/core';
import { SharedDirective } from 'src/app/shared/directives/shared.directive';

@Component({
  selector: 'app-shared-link-field',
  templateUrl: './shared-link-field.component.html',
  styleUrls: ['./shared-link-field.component.scss']
})
export class SharedLinkFieldComponent extends SharedDirective {

  constructor() { super () }

  isMatIcon(): boolean {
    return this.imageType === 'mat-icon';
  }
}
