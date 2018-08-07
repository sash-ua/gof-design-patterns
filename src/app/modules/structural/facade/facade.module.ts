import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeComponent } from './components/facade.component';
import {FacadeRoutingModule} from './facade-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FacadeRoutingModule,
    SharedModule
  ],
  declarations: [FacadeComponent]
})
export class FacadeModule { }
