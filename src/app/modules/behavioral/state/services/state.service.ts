import {Injectable} from '@angular/core';
import {Man, Time} from './state/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() {
  }

  state() {
    const man = new Man();
    // man.behavior(); // 'Morning routine' by default
    // man.behavior(Time.evening); // morning -> noon, therefore state does not changed
    // man.behavior(Time.noon);  // 'Noon routine'
  }
}
