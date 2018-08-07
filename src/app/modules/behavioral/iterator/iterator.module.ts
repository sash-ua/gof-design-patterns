import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IteratorComponent } from './components/iterator.component';
import {IteratorRoutingModule} from './iterator-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IteratorRoutingModule,
    SharedModule
  ],
  declarations: [IteratorComponent]
})
export class IteratorModule { }
