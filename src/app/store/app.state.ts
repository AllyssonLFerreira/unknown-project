import {RouterState} from "./router/route.reducers";
import {ModalDialogState} from "./modal-dialog/modal-dialog.reducer";

export interface AppState {
  modalDialog: ModalDialogState;
  router: RouterState;
}
