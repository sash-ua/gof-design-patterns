import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverComponent } from './components/observer.component';
import {ObserverRoutingModule} from './observer-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ObserverRoutingModule,
    SharedModule
  ],
  declarations: [ObserverComponent]
})
export class ObserverModule { }
