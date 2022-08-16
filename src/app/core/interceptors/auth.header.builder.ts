import {HttpRequest} from "@angular/common/http";
import {environment} from "../../../environments/environment";


export class AuthHeaderBuilder {
  public static builder(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'app-token': environment.accessToken
      }
    });
  }
}
