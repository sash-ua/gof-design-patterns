import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmbeddedContainerComponent} from './components/container/embedded-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmbeddedContainerComponent
  ],
  exports: [
    EmbeddedContainerComponent
  ]
})
export class SharedModule { }
