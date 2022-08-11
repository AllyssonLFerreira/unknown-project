import { Params } from "@angular/router";
import { getSelectors, routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

export const featureKey = 'router';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface RouterState {
  router: RouterReducerState<RouterStateUrl> ;
}

export const reducers: ActionReducerMap<RouterState> = {
  router: routerReducer
}

export const reducer = routerReducer; 

export const getRouterState = 
  createFeatureSelector<RouterReducerState<RouterStateUrl>>(featureKey);

  export const {
    selectCurrentRoute,
    selectFragment,
    selectQueryParams,
    selectQueryParam,
    selectRouteParam,
    selectRouteParams,
    selectRouteData,
    selectUrl
  } = getSelectors();