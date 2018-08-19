import {QuickSort} from './quicksort';
import {BubbleSort} from './bubblesort';

abstract class Strategy {
  abstract sort(arr: Array<number>): Array<number>;
}

export class QuickSortSrategy extends Strategy {
  public sort(arr: Array<number>): Array<number> {
    return QuickSort.run(arr, 0, arr.length - 1);
  }
}

export class BubbleSortCtrategy extends Strategy {
  public sort(arr: Array<number>): Array<number> {
    return BubbleSort.run(arr);
  }
}

export class SetContext {
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
