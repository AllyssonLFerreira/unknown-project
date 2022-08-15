import { RouterStateSerializer } from "@ngrx/router-store";
import { RouterStateUrl } from "./route.reducers";
import { RouterStateSnapshot } from "@angular/router";

export class CustomRouterSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }
    const {
      url, root:{ queryParams },
    } = routerState;
    const {params} = route;
    return { url, params, queryParams };
  }
}