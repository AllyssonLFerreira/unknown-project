import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "./games.model";
import {environment as env} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private endpoint = `${env.url}?${env.accessToken}`;
  private endpointFalse = `assets/api/games.list.json`

  constructor(private http: HttpClient) { };

  fetch(httpParams: HttpParams): Observable<ApiResponse> {
    if (!httpParams.has('page')) {
      return this.http.get<ApiResponse>(`assets/api/games.list.json`)
    }
    else {
      return this.http.get<ApiResponse>(`assets/api/games.list.json`)
    }
  }
   fetchDocument(path: string): Observable<HttpResponse<Blob>> {
    return this.http.get<Blob>(`${env.url}?/${path}`.replace('//', '/')
    , {observe: 'response', responseType: 'blob' as 'json'})
  }


 /* getAllGames():Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.endpointFalse)
  };

  */


}

