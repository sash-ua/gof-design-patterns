import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbstractFactoryRoutingModule } from './abstract-factory-routing.module';
import {AbstractFactoryComponent} from './components/abstract-factory.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AbstractFactoryRoutingModule,
    SharedModule
  ],
  declarations: [
    AbstractFactoryComponent,
  ]
})
export class AbstractFactoryModule { }
