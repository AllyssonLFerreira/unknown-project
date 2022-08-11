import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ComponentPortal, DomPortal, TemplatePortal } from '@angular/cdk/portal';

export type Portal = TemplatePortal | ComponentPortal<any> | DomPortal;

@Injectable({
  providedIn: 'root'
})

export class PortalBridgeService {
  private activePortal = new Subject<Portal>();

  readonly portal$ = this.activePortal.asObservable();

  setPortal(portal: Portal): void {
    this.activePortal.next(portal);
  };
}