import {Injectable} from '@angular/core';
import {QuickSort} from './strategy/quicksort';
import {BubbleSort} from './strategy/bubblesort';
import {QuickSortSrategy, SetContext} from './strategy/strategy';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  constructor() {
  }

  strategy() {
    const ARR_GEN = (length, max) => {
      return new Array(length).fill(0).map(() => {
        return Math.round(Math.random() * max);
      });
    };

    const arr = ARR_GEN(100, 100);
    // console.log( arr);
    const qStrategy = new SetContext(new QuickSortSrategy());
    // qStrategy.sort(arr);
    // console.log(qStrategy.result);
  }
}
