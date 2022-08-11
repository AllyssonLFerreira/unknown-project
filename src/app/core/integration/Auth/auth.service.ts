import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest, AuthResponse } from '../../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { };

  auth(authRequest: AuthRequest): Observable<AuthResponse> {
    if (authRequest.user === 'Develop') {
      return this.http.get<AuthResponse>(`assets/api/login.json?=${authRequest}`)
    }
    return this.http.post<AuthResponse>(`api/passed/auth`, authRequest);
  }
}
