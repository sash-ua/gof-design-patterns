import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent } from './components/state.component';
import {StateRoutingModule} from './state-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    StateRoutingModule,
    SharedModule
  ],
  declarations: [StateComponent]
})
export class StateModule { }
