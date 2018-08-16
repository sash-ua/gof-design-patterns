import {Injectable} from '@angular/core';
import {CareTaker, Originator} from './memento/memento';

@Injectable({
  providedIn: 'root'
})
export class MementoService {

  constructor() {
  }

  memento() {
    // const originator = new Originator();
    // originator.state = 'ONE STATE';
    // console.log('init.: ', originator.state);
    // const caretaker = new CareTaker();
    // caretaker.memento = originator.createMemento();
    // originator.state = 'another state';
    // console.log('originator set another state: ', originator.state);
    // originator.setMemento(caretaker.memento);
    // console.log('recall state from memento: ', originator.state);
  }
}
