import {Injectable} from '@angular/core';
import {iterator} from './iterator/iterator';

@Injectable({
  providedIn: 'root'
})
export class IteratorService {

  constructor() {
  }

  iterator() {
    iterator();
  }
}
