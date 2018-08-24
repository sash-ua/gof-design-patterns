import {Injectable} from '@angular/core';
import {adpterObjLvl} from './adapter/adapter-object-lvl';
import {adapterClassLvl} from './adapter/adapter-class-lvl';

@Injectable({
  providedIn: 'root'
})
export class AdapterService {

  constructor() {
  }

  adpterObjLvl(): void {
    adpterObjLvl();
  }

  adapterClassLvl(): void {
    adapterClassLvl();
  }
}
