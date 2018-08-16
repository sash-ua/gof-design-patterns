import {Injectable} from '@angular/core';
import {Colleague1, Colleague2, ConcretMediator} from './mediator/mediator';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  constructor() {
  }

  mediator() {
    // const mediator = new ConcretMediator();
    // const coll1 = new Colleague1(mediator);
    // const coll2 = new Colleague2(mediator);
    // mediator.c1 = coll1;
    // mediator.c2 = coll2;
    // coll1.send('msg from 1');
    // coll2.send('msg from 2');
  }
}
