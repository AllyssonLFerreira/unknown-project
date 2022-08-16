import {Component, OnInit, AfterViewInit, OnDestroy, Input} from '@angular/core';
import {ApiResponse, games} from "../../../core/integration/Dashboard/games.model";
import {Observable, Subscription} from "rxjs";
import {DashboardState, DashboardStore} from "../../../store/dashboard/dashboard.store";
import {AppState} from "../../../store/app.state";
import {Store} from "@ngrx/store";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {LiveAnnouncer} from "@angular/cdk/a11y";


@Component({
  selector: 'app-card-games',
  templateUrl: './card-games.component.html',
  styleUrls: ['./card-games.component.scss']
})
export class CardGamesComponent implements OnInit, OnDestroy {
    content?: ApiResponse;
    params: { [key: string]: any } = { };
    subscription?: Subscription;
    games: [] = []

    @Input() dashboardState$!: Observable<DashboardState>;

    constructor(
          private readonly _dashboardStore: DashboardStore,
          private store: Store<AppState>,
          public dialog: MatDialog,
          private router: Router,
          private _liveAnnouncer: LiveAnnouncer ) { };

    ngOnInit(): void {
        this.loadDashboard();
    }
    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
    loadDashboard(): void {
        this.dashboardState$.subscribe( state => {
            this._setContent(state.content)
            this._setParams(state.params)
        });
    }
    private _setContent(content?: ApiResponse): void {
        this.content = content;
        if(!!content && !!content.results) {
          console.log(this.content?.results)
        }
    }
    private _setParams(params?: { [key: string]: any; }): void {
      if(!!params) {
        this.params = params
      }
    }

 /* getGames() {
    this.gamesService.getAllGames().subscribe((res: GetResponse  ) => {
      this.games = res.results;
    })
  } */
}
