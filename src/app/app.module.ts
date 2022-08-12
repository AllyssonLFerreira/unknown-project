import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './core/integration/Auth/auth.guard';

import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './views/public.module';
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
    CoreModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
