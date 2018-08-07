import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlyweightComponent } from './components/flyweight.component';
import {FlyweightRoutingModule} from './flyweight-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FlyweightRoutingModule,
    SharedModule
  ],
  declarations: [FlyweightComponent]
})
export class FlyweightModule { }
