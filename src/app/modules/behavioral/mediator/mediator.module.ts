import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediatorComponent } from './components/mediator.component';
import {MediatorRoutingModule} from './mediator-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MediatorRoutingModule,
    SharedModule
  ],
  declarations: [MediatorComponent]
})
export class MediatorModule { }
