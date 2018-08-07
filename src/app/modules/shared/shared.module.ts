import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WikiPatternDescriptionComponent} from './components/description/wiki-pattern-description.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WikiPatternDescriptionComponent
  ],
  exports: [
    WikiPatternDescriptionComponent
  ]
})
export class SharedModule { }
