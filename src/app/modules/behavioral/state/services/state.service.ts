import {Injectable} from '@angular/core';
import {state} from './state/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  state() {
    state();
  }
}
