import {Injectable} from '@angular/core';
import {Map} from './iterator/iterator';

@Injectable({
  providedIn: 'root'
})
export class IteratorService {

  constructor() {
  }

  iterator() {
    const map = new Map();
    // console.log('map.size', map.size);
    // console.log('map.set(\'first\', 1)', map.set('first', 1));
    // console.log('map.set(\'second\', 1)', map.set('second', 1));
    // console.log('map.size', map.size); // 2
    // console.log('map.set(\'third\', 1)', map.set('third', 1));
    // console.log('map.set(\'third\', 1)', map.set('third', 1)); // Error
    // console.log('map.size', map.size); // 3
    // console.log('map.set(\'forth\', 1)', map.set('forth', 1));
    // console.log('map.size', map.size); // 4
    // console.log('map.get(\'first\')', map.get('first'));
    // console.log('map.get(\'none\')', map.get('none'));
    // map.delete('none');
    // console.log('map.size', map.size);
    // map.delete('first');
    // console.log('map.size', map.size);
  }
}
