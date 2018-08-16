import {Injectable} from '@angular/core';
import {Map} from './iterator/iterator';

@Injectable({
  providedIn: 'root'
})
export class IteratorService {

  constructor() {
  }

  iterator() {
    // const map = new Map();
    // console.log('map.size', map.size);
    // console.log('map.set(\'first\', 1)', map.set('first', 1));
    // console.log('map.set(\'second\', 1)', map.set('second', 2));
    // console.log('map.size', map.size); // 2
    // console.log('map.set(\'third\', 1)', map.set('third', 3));
    // console.log('map.set(\'third\', 1)', map.set('third', 55)); // Error
    // console.log('map.size', map.size); // 3
    // console.log('map.set(\'forth\', 1)', map.set('forth', 4));
    // console.log('map.size', map.size); // 4
    // console.log('map.get(\'first\')', map.get('first'));
    // console.log('map.get(\'none\')', map.get('none'));
    // map.delete('none');
    // map.delete('first');
    // console.log('map', map); // 2
    //
    // const keyIterator = map.createKeyIterator();
    // for (let i = keyIterator.first(); !keyIterator.isDone(); i = keyIterator.next()) {
    //   console.log(i);
    // }
    // const valIterator = map.createValIterator();
    // for (let i = valIterator.first(); !valIterator.isDone(); i = valIterator.next()) {
    //   console.log(i);
    // }
  }
}
