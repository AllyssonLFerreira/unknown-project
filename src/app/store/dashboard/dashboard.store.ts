import {Injectable} from "@angular/core";
import {BaseEntity, BaseStore} from "../base/base.store";
import {ApiResponse} from "../../core/integration/Dashboard/games.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {GamesService} from "../../core/integration/Dashboard/games.service";
import {LoaderStore} from "../loader/loader.store";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {catchError, EMPTY, Observable, switchMap, tap} from "rxjs";
import {Params} from "@angular/router";
import {tapResponse} from "@ngrx/component-store";
import {HttpParamBuilder} from "../../core/http-param-builder";


export interface DashboardState extends BaseEntity {
  content?: ApiResponse;
  params?: { [key: string]: any; };
  document?: HttpResponse<Blob>;
  reloadTable: boolean;
}

const initialState: DashboardState = {
  reloadTable: true
};

@Injectable()
export class DashboardStore extends BaseStore<DashboardState> {
  constructor(
    private readonly _gameService: GamesService,
    private readonly _loaderStore: LoaderStore,
    _store: Store<AppState>) {
    super( _store, initialState);
  }

  readonly  fetch = this.effect((auth$: Observable<Params>) => {
      return auth$.pipe(
          tap(() => this._loaderStore.start()),
          tap(() => this.setReloadTable(true)),
          switchMap((params) => this._gameService.fetch(HttpParamBuilder.paramMapToHttpParams(params))
              .pipe(tapResponse((response) => {
                  this.setContent(response);
                  this.setParams(params);
                },
              (error: HttpErrorResponse) => {
                  this.setErrors(error);
                  this._loaderStore.end();
                }
              ),
              tap(() => this.setReloadTable(false)),
              tap(() => this._loaderStore.end()),
              catchError(() => EMPTY),
        )),
      )
    });

  readonly  fetchDocument = this.effect((auth$: Observable<string>) => {
      return auth$.pipe(
          tap(() => this._loaderStore.start()),
          switchMap((id) => this._gameService.fetchDocument(id).pipe(
              tapResponse((document) => this.setDocument(document),
                  (error: HttpErrorResponse) => {
                  this.setErrors(error);
                  this._loaderStore.end();
                  }
              ),
            tap(() => this.setReloadTable(false)),
            tap( () => this._loaderStore.end()),
            catchError(() => EMPTY),
          )),
      )
  });

  readonly setReloadTable = this.updater( (state, reloadTable: boolean) =>
    ({...state, reloadTable}));

  readonly setContent = this.updater((state, content: ApiResponse) =>
    ({...state, content}));

  readonly setParams = this.updater((state, params: Params) =>
    ({...state, params}));

  readonly setDocument = this.updater((state, document: HttpResponse<Blob> | undefined) =>
    ({...state, document}));

  getState(): Observable<DashboardState> {
    return this.select((state) => state);
  }

  getDocument(): Observable<HttpResponse<Blob> | undefined> {
    return this.select((state) => state.document);
  }

  getContent(): Observable<ApiResponse | undefined> {
    return this.select((state) => state.content)
  }

  readonly  isReloadTable = this.select((state) => state.reloadTable);

}
