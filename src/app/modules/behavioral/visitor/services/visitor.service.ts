import {Injectable} from '@angular/core';
import {visitior} from './visitor/visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor() {
  }

  visitior() {
    visitior();
  }
}
