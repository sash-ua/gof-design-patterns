import {Injectable} from '@angular/core';
import {Keratinocytes} from './prototype/prototype';

@Injectable({
  providedIn: 'root'
})
export class PrototypeService {

  constructor() {
  }

  prototype() {
    const proto = new Keratinocytes();
    const clone = proto.clone();
    // console.log('proto size', proto.size); //1
    // console.log('clone size', clone.size); //1
    // proto.eat([1, 2, 3]);
    // console.log('proto size after eating', proto.size); //1.3
    // console.log('clone size', clone.size); //1
  }
}
