import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {makeStateKey, TransferState} from "@angular/platform-browser";
import {Observable, of} from "rxjs";

@Injectable()
export class BrowserStateInterceptor implements HttpInterceptor {
  constructor (private transferState: TransferState) { };
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /**
     * get state key
     */
    const stateKey = makeStateKey(req.urlWithParams);

    if (req.method !== 'GET') {
      return next.handle(req);
    }

    /**
     * get state
     */
    const storedResponse =  this.transferState.get(makeStateKey(stateKey), null);
    if (storedResponse) {
      const response = new HttpResponse( {body: storedResponse, headers: req.headers, status: 200});
      return of(response);
    }

    return next.handle(req);
  }
}
