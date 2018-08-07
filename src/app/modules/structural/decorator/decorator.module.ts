import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratorComponent } from './components/decorator.component';
import {DecoratorRoutingModule} from './decorator-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DecoratorRoutingModule,
    SharedModule
  ],
  declarations: [DecoratorComponent]
})
export class DecoratorModule { }
