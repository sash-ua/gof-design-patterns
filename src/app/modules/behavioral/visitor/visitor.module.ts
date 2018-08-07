import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorComponent } from './components/visitor.component';
import {VisitorRoutingModule} from './visitor-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    VisitorRoutingModule,
    SharedModule
  ],
  declarations: [VisitorComponent]
})
export class VisitorModule { }
