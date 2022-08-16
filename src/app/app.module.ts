import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './core/integration/Auth/auth.guard';
import { HttpClientModule } from "@angular/common/http";

import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './features/public.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PublicModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    CoreModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
