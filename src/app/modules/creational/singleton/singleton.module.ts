import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingletonRoutingModule } from './singleton-routing.module';
import {SingletonComponent} from './components/singleton.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SingletonRoutingModule,
    SharedModule
  ],
  declarations: [
    SingletonComponent
  ]
})
export class SingletonModule { }
