import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CachingInterseptorService} from './core/services/http-interseptors/caching-interseptor/caching-interseptor.service';
import {CreationalComponent} from './core/components/creational/creational.component';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import {BehavioralComponent} from './core/components/behavioral/behavioral.component';
import {StructuralComponent} from './core/components/structural/structural.component';

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
export class AppModule {
}
