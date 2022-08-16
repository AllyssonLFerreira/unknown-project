import {ComponentStore} from '@ngrx/component-store';
import {Observable} from "rxjs";
import {ErrorModel} from "../../core/models/error.model";
import {HttpErrorResponse} from "@angular/common/http";
import {BaseBuilder} from "./base.builder";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";

export interface BaseEntity {
  error?: ErrorModel;
}

export class BaseStore<T extends BaseEntity> extends ComponentStore<T> {
  constructor( private readonly _store: Store<AppState>, defaultState?: T) {
    super(defaultState);
  }

  getErrors(): Observable<ErrorModel | undefined> {
    return this.select((state) => state.error);
  }

  readonly setErrors = this.updater((state, error: HttpErrorResponse) => {
    const err = BaseBuilder.build(error);
    return {...state, error: err};
  });

  readonly deleteErrors = this.updater((state) => ({ ...state, error: null}));
}
