import {Injectable, Inject, PLATFORM_ID} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthStore} from "../../../store/auth/auth.store";
import {CookieService} from "../Auth/Cookie/cookie";

@Injectable()
export class AuthIsAuthenticate implements Resolve<Subscription> {
  constructor (
      private readonly  _authStore: AuthStore,
      private cookieService: CookieService,
      @Inject(PLATFORM_ID) private platformId: any) { };

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Subscription {
      const user = this.cookieService.get('user');
      if(!!user) {
          return this._authStore.setUser({name: user})
      }
      return this._authStore.setUser({name: user})
  }
}
