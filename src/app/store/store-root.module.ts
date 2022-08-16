import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {IntegrationModule} from "../core/integration/integration.module";
import {StoreModule} from "@ngrx/store";
import {LoaderStore} from "./loader/loader.store";
import {AuthStore} from "./auth/auth.store";
import {DashboardStore} from "./dashboard/dashboard.store";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IntegrationModule,
    StoreModule
  ],
  providers: [
    LoaderStore,
    AuthStore,
    DashboardStore,
  ]
})
export class StoreRootModule { }
