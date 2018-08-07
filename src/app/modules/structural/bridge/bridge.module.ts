import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BridgeComponent } from './components/bridge.component';
import {BridgeRoutingModule} from './bridge-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BridgeRoutingModule,
    SharedModule
  ],
  declarations: [BridgeComponent]
})
export class BridgeModule { }
