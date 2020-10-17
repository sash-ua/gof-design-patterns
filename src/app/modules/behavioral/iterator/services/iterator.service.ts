import {Injectable} from '@angular/core';
import {iterator} from './iterator/iterator';

@Injectable({
  providedIn: 'root'
})
export class IteratorService {
  iterator() {
    iterator();
  }
}
