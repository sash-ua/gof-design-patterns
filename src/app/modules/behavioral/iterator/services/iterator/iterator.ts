import {Map} from './map';

export function iterator() {
  const map = new Map();
  map.set('first', 1);
  map.set('second', 2);
  map.set('third', 3);
  const keyIterator = map.createKeyIterator();
  for (let i = keyIterator.first(); !keyIterator.isDone(); i = keyIterator.next()) {
    console.log(i);
  }
  const valIterator = map.createValIterator();
  for (let i = valIterator.first(); !valIterator.isDone(); i = valIterator.next()) {
    console.log(i);
  }
}

export interface Enumerator {
  first(): any;

  currentItem(): any;

  next(): any;

  isDone(): boolean;
}

export abstract class Iterator implements Enumerator {
  protected current: number;

  protected constructor(public iterable: Map) {
  }

  protected abstract getItem(ind: number);

  public first(): any {
    return this.getItem(0);
  }

  public currentItem(): any {
    return this.getItem(this.current);
  }

  public next(): any {
    return this.current++ < this.iterable.size - 1 ? this.getItem(this.current) : null;
  }

  public isDone(): boolean {
    if (this.current < this.iterable.size) {
      return false;
    } else {
      this.current = 0;
      return true;
    }
  }
}

export class KeyIterator extends Iterator {
  protected current = 0;

  constructor(public iterable: Map) {
    super(iterable);
  }

  protected getItem(ind: number) {
    return this.iterable.keyVault[ind];
  }
}

export class ValIterator extends Iterator {
  protected current = 0;

  constructor(public iterable: Map) {
    super(iterable);
  }

  protected getItem(ind: number) {
    return this.iterable.valueVault[ind];
  }
}
