import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompositeComponent } from './components/composite.component';
import {CompositeRoutingModule} from './composite-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CompositeRoutingModule,
    SharedModule
  ],
  declarations: [CompositeComponent]
})
export class CompositeModule { }
