import {Injectable} from '@angular/core';
import {AdapterObjLvl, Answer} from './adapter/adapter-object-lvl-example';
import {AdapterClassLvl} from './adapter/adapter-class-lvl-example';

@Injectable({
  providedIn: 'root'
})
export class AdapterService {

  constructor() {
  }

  adpterObjLvl(): Answer {
    return new AdapterObjLvl().request({body: 'go'});
  }

  adapterClassLvl(): Answer {
    return new AdapterClassLvl().request({body: 'go'});
  }
}
