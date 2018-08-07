import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateMethodComponent } from './components/template-method.component';
import {TemplateMethodRoutingModule} from './template-method-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TemplateMethodRoutingModule,
    SharedModule
  ],
  declarations: [TemplateMethodComponent]
})
export class TemplateMethodModule { }
