import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactoryMethodRoutingModule } from './factory-method-routing.module';
import { FactoryMethodComponent } from './components/factory-method.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FactoryMethodRoutingModule,
    SharedModule
  ],
  declarations: [
    FactoryMethodComponent,
  ]
})
export class FactoryMethodModule { }
