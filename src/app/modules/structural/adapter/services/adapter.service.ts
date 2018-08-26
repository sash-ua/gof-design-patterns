import {Injectable} from '@angular/core';
import {AdapterClassLvl, AdapterObjectLvl} from './adapter/adapter';

@Injectable({
  providedIn: 'root'
})
export class AdapterService {

  constructor() {
  }

  adapter(): void {
    AdapterObjectLvl.adpterObjLvl();
    AdapterClassLvl.adapterClassLvl();
  }
}
