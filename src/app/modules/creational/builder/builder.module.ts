import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderRoutingModule } from './builder-routing.module';
import {BuilderComponent} from './components/builder.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BuilderRoutingModule,
    SharedModule
  ],
  declarations: [BuilderComponent]
})
export class BuilderModule { }
