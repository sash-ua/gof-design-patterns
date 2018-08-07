import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MementoComponent } from './components/memento.component';
import {MementoRoutingModule} from './memento-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MementoRoutingModule,
    SharedModule
  ],
  declarations: [MementoComponent]
})
export class MementoModule { }
