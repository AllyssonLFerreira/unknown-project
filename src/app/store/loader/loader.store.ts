import { Injectable } from '@angular/core';
import { BaseEntity, BaseStore } from '../base/base.store';
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";

export interface LoaderState extends BaseEntity{
  status: boolean
}

@Injectable()
export class LoaderStore extends BaseStore<LoaderState> {
  constructor( _store: Store<AppState>) {
    super( _store, {status: false} );
  }

  readonly start = this.updater((state) => ({status: true}));
  readonly end = this.updater((state) => ({status: false}));
  readonly getStatus = this.select((state) => state.status);
}
