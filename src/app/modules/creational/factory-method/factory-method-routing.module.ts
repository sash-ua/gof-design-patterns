import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FactoryMethodComponent} from './components/factory-method.component';

const routes: Routes = [
  {path: '', component: FactoryMethodComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactoryMethodRoutingModule {
}
