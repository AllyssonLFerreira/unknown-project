import { Injectable } from '@angular/core';
import { BaseEntity, BaseStore } from '../base/base.store';

export interface LoaderState extends BaseEntity{
  status: boolean
}

@Injectable()
export class LoaderStore extends BaseStore<LoaderState> {
  constructor() {
    super( {status: false} );
  }

  readonly start = this.updater((state) => ({status: true}));
  readonly end = this.updater((state) => ({status: false}));
  readonly getStatus = this.select((state) => state.status);
}