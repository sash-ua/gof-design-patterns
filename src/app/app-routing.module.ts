import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {ROUTES} from './constants/routes';


@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
