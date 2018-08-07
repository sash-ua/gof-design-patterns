import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdapterComponent} from './components/adapter.component';
import {AdapterRoutingModule} from './adapter-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdapterRoutingModule,
    SharedModule
  ],
  declarations: [AdapterComponent]
})
export class AdapterModule { }
