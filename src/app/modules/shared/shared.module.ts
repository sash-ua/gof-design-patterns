import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmbeddedContainerComponent} from './components/embedded-container/embedded-container.component';
import { PatternComponent } from './components/pattern/pattern.component';
import { SafeHtmlPipe } from './pipes/safe-html/safe-html.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmbeddedContainerComponent,
    PatternComponent,
    SafeHtmlPipe
  ],
  exports: [
    EmbeddedContainerComponent,
    PatternComponent,
    SafeHtmlPipe
  ]
})
export class SharedModule { }
