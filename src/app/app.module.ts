import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreationalComponent } from './creational/creational.component';
import { StructuralComponent } from './structural/structural.component';
import { BehavioralComponent } from './behavioral/behavioral.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CachingInterseptorService} from './core/http-interseptors/caching-interseptor/caching-interseptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CreationalComponent,
    StructuralComponent,
    BehavioralComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CachingInterseptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
