import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmbeddedContainerComponent} from './components/embedded-container/embedded-container.component';
import { PatternComponent } from './components/pattern/pattern.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmbeddedContainerComponent,
    PatternComponent
  ],
  exports: [
    EmbeddedContainerComponent,
    PatternComponent
  ]
})
export class SharedModule { }
