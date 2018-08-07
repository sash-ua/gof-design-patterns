import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProxyComponent} from './components/proxy.component';

const routes: Routes = [
  {path: '', component: ProxyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProxyRoutingModule {
}
