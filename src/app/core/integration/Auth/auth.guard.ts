import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
      private router: Router,
    ) {};

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAuthenticate()) {
      return of(true);
    }
    return this.router.navigateByUrl('/')
  }
  
  /* Função de checagem do cookie */
  isAuthenticate(): boolean {
    const Token = window.localStorage.getItem('token');
    if (Token) {
      return true;
    } else {
      return false;
    }
  }
}
