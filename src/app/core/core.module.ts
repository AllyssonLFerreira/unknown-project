import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalBridgeService } from './portal-bridge/portal-bridge.service';
import { CookieService } from './integration/Auth/Cookie/cookie.service';
import { AuthGuard } from './integration/Auth/auth.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
      PortalBridgeService,
      AuthGuard,
      CookieService
    ]
})
export class CoreModule { }
