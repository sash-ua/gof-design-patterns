import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpreterComponent } from './components/interpreter.component';
import {InterpreterRoutingModule} from './interpreter-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InterpreterRoutingModule,
    SharedModule
  ],
  declarations: [InterpreterComponent]
})
export class InterpreterModule { }
