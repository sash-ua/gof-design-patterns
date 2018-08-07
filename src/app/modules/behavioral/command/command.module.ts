import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandComponent } from './components/command.component';
import {CommandRoutingModule} from './command-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CommandRoutingModule,
    SharedModule
  ],
  declarations: [CommandComponent]
})
export class CommandModule { }
