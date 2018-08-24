import {QuickSort} from './quicksort';
import {BubbleSort} from './bubblesort';
import {arrayGen} from './array-generator';

export function strategy() {
  // const arr = arrayGen(100, 100);
  // console.log('unsorted', arr);
  // const qStrategy = new SetContext(new QuickSortStrategy());
  // qStrategy.sort(arr);
  // console.log('QuickSortStrategy', qStrategy.result);
  // const arr2 = arrayGen(100, 100);
  // console.log('unsorted', arr2);
  // const bStrategy = new SetContext(new BubbleSortStrategy());
  // bStrategy.sort(arr2);
  // console.log('BubbleSortStrategy', bStrategy.result);
}

abstract class Strategy {
  abstract sort(arr: Array<number>): Array<number>;
}

class QuickSortStrategy extends Strategy {
  public sort(arr: Array<number>): Array<number> {
    return QuickSort.run(arr, 0, arr.length - 1);
  }
}

class BubbleSortStrategy extends Strategy {
  public sort(arr: Array<number>): Array<number> {
    return BubbleSort.run(arr);
  }
}

class SetContext {
  private sortedArray: Array<number> = [];

  constructor(private context: Strategy) {
  }

  public sort(arr: Array<number>): void {
    this.sortedArray = this.context.sort(arr);
  }

  get result() {
    return this.sortedArray;
  }
}
