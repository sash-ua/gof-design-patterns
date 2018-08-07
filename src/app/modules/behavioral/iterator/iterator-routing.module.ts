import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IteratorComponent} from './components/iterator.component';

const routes: Routes = [
  {path: '', component: IteratorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IteratorRoutingModule {
}
