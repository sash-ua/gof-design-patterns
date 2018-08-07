import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InterpreterComponent} from './components/interpreter.component';

const routes: Routes = [
  {path: '', component: InterpreterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterpreterRoutingModule {
}
