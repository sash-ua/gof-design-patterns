import {Injectable} from '@angular/core';
import { mediatorE} from './mediator/mediator';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  constructor() {
  }

  mediator() {
    mediatorE();
  }
}
