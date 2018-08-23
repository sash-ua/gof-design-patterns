import {Injectable} from '@angular/core';
import {AdapterObjLvl} from './adapter/adapter-object-lvl';
import {AdapterClassLvl} from './adapter/adapter-class-lvl';

@Injectable({
  providedIn: 'root'
})
export class AdapterService {

  constructor() {
  }

  adpterObjLvl(): void {
    // console.log(new AdapterObjLvl().request({body: 'go'}));
  }

  adapterClassLvl(): void {
    // console.log(new AdapterClassLvl().request({body: 'go'}));
  }
}
