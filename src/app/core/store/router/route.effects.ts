import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as RouteAction from './route.actions'
import {tap} from "rxjs/operators";

@Injectable()
export class RouteEffects {
  
  constructor(
    private actions$: Actions,
    private router: Router
  ) {}
  goToRegisterUnknown$ = createEffect (
    () => this.actions$.pipe(
      ofType(RouteAction.goToRegisterUnknown),
      tap((props) => window.location.href = '/unkonwn')),
      {dispatch: false}
  );
  goToLogin$ = createEffect(
    () => this.actions$.pipe(
      ofType(RouteAction.goToLogin),
      tap(() => {
        return this.router.navigate(['/']);
      })), {dispatch: false}
  );
}
