import {ComponentStore} from '@ngrx/component-store';
import {Observable} from "rxjs";
import {ErrorModel} from "../common/error.model";
import {HttpErrorResponse} from "@angular/common/http";
import {BaseBuilder} from "./base.builder";

export interface BaseEntity {
  error?: ErrorModel;
}

export class BaseStore<T extends BaseEntity> extends ComponentStore<T> {
  constructor(defaultState?: T) {
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