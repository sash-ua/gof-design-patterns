import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProxyComponent } from './components/proxy.component';
import {ProxyRoutingModule} from './proxy-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProxyRoutingModule,
    SharedModule
  ],
  declarations: [ProxyComponent]
})
export class ProxyModule { }
