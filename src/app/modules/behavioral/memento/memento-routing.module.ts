import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {} from './components/abstract-factory.component';
import {MementoComponent} from './components/memento.component';

const routes: Routes = [
  {path: '', component: MementoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MementoRoutingModule {
}
