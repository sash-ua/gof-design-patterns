import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategyComponent } from './components/strategy.component';
import {StrategyRoutingModule} from './strategy-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    StrategyRoutingModule,
    SharedModule
  ],
  declarations: [StrategyComponent]
})
export class StrategyModule { }
