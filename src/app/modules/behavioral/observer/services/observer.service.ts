import {Injectable} from '@angular/core';
import {pullObserver} from './observer/observer-pull';
import {pushObserver} from './observer/observer-push';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {
  pullObserver() {
    pullObserver();
  }

  pushObserver() {
    pushObserver();
  }
}
