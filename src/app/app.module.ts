import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsModule } from './flights/flights.module';
import { FLIGHTS_ROUTES } from './flights/flights.routes';
import { NishanthComponent } from './nishanth/nishanth.component';

@NgModule({
  declarations: [
    AppComponent,
    NishanthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlightsModule,
    RouterModule.forChild(FLIGHTS_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
