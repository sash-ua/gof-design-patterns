import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChainOfResponsibilityComponent } from './components/chain-of-responsibility.component';
import {ChainOfResponsibilityRoutingModule} from './chain-of-responsibility-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ChainOfResponsibilityRoutingModule,
    SharedModule
  ],
  declarations: [ChainOfResponsibilityComponent]
})
export class ChainOfResponsibilityModule { }
