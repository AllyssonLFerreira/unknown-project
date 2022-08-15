import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { tapResponse } from "@ngrx/component-store";
import { catchError, EMPTY, Observable, switchMap, tap } from "rxjs";
import { AuthService } from "../../core/integration/Auth/auth.service";
import { CookieService } from "../../core/integration/Auth/Cookie/cookie";

import { AuthRequest, AuthResponse } from "../../core/models/auth.model";
import { BaseEntity, BaseStore } from "../base/base.store";
import { LoaderStore } from "../loader/loader.store";
export interface AuthState extends BaseEntity {
  authResponse?: AuthResponse
  user?: AuthResponse["user"]
}

const initialState: AuthState = {};

@Injectable()
export class AuthStore extends BaseStore<AuthState> {
  constructor(
    private readonly _authApiService: AuthService,
    private readonly _loaderStore: LoaderStore,
    private readonly _cookieService: CookieService,
    private router: Router
    ) { super(initialState) }

    readonly auth = this.effect((auth$: Observable<AuthRequest>) => {
      return auth$.pipe(
        tap(() => this._loaderStore.start()),
        switchMap((authRequest) => this._authApiService.auth(authRequest).pipe(
          tapResponse(
            (auth) => {
              this._setAuthCookies(auth);
              return this.setUser(auth.user);
            },
            (error: HttpErrorResponse) => {
              this.setErrors(error);
              this._loaderStore.end();
            }
          ),
          catchError(() => EMPTY),
          tap(() => {this.deleteErrors()})
        )),
      )
    });

    readonly logout = this.effect((auth$: Observable<void>) => {
      return auth$.pipe(
        tap(() => {
          this._cookieService.delete('accessToken');
          this._cookieService.delete('user');
          return this.router.navigate(['/'])
        })
      )
    });

   /*  readonly fetchUserAuthentication = this.effect((auth$:Observable<string | undefined>) => {
      return auth$.pipe(
        map(auth => {
            this.setUser(auth.user);
            this._setCookieUser(auth.user.name);
            return auth.user;
          }),
          catchError(() => EMPTY)
        )
      )
    } */
    private _setAuthCookies(auth: AuthResponse): void {
      this._cookieService.set('accessToken', auth.accessToken);
      this._setCookieUser(auth.user.name);
    }

    private _setCookieUser(userName: string): void {
      this._cookieService.set('user', userName)
    }

    readonly reset = this.updater((state) => (initialState));
    readonly setUser = this.updater((state, user: AuthResponse['user']) => ({...state, user}));

    getUser(): Observable<AuthResponse["user"] | undefined> {
      return this.select((state) => state.user);
    }
}
