import {Injectable} from '@angular/core';
import {Facade} from './facade/facade';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor() {
  }

  facade() {
    const f = new Facade();
    // f.operationAB();
    // f.operationAD();
    // f.operationCD();
  }
}
