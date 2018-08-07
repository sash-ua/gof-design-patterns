import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrototypeRoutingModule } from './prototype-routing.module';
import { PrototypeComponent } from './components/prototype.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PrototypeRoutingModule,
    SharedModule
  ],
  declarations: [
    PrototypeComponent
  ]
})
export class PrototypeModule { }
