import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CookieService } from "../integration/Auth/Cookie/cookie";
import { AuthHeaderBuilder } from "./auth.header.builder";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  PATH_NOT_REQUIRED_ACCESS_TOKEN = [ 'login/']

  constructor(private cookieService: CookieService) {};

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.addHeader(req.url)) {
      req = AuthHeaderBuilder.builder(req, this.cookieService.get('accessToken')!);
    }
    return next.handle(req);
 }

 private addHeader(url:string): boolean {
    return this.cookieService.check('accessToken') && !this.PATH_NOT_REQUIRED_ACCESS_TOKEN.includes(url);
  }
}
