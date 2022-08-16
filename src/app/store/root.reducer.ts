
import * as fromModalDialog from './modal-dialog/modal-dialog.reducer';
import * as fromRouter from './router/route.reducers';
import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "./app.state";

export const reducers: ActionReducerMap<AppState> = {
  [fromModalDialog.featureKey]: fromModalDialog.reducer,
  [fromRouter.featureKey]: fromRouter.reducer
};
