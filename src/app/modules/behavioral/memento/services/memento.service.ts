import {Injectable} from '@angular/core';
import {memento} from './memento/memento';

@Injectable({
  providedIn: 'root'
})
export class MementoService {

  constructor() {
  }

  memento() {
    memento();
  }
}
