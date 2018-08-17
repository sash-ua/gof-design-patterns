import {Injectable} from '@angular/core';
import {Observer1, ConcreteSubject, Observer2} from './observer/observer-pull';
import {PushConcreteSubject, PushObserver1, PushObserver2} from './observer/observer-push';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  constructor() {
  }

  pullObserver() {
    const sub = new ConcreteSubject();
    sub.attach(new Observer1(sub));
    sub.attach(new Observer2(sub));
    sub.state = 'Some state...';
    // sub.notify();
  }

  pushObserver() {
    const subj = new PushConcreteSubject();
    subj.attach(new PushObserver1());
    subj.attach(new PushObserver2());
    subj.state = 'Some state for push example';
    // subj.notify();
  }
}
