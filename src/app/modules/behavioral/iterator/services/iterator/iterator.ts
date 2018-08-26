export function iterator() {
  const map = new Map();
  map.set('first', 1);
  map.set('second', 2);
  map.set('third', 3);
  // const keyIterator = map.createKeyIterator();
  // for (let i = keyIterator.first(); !keyIterator.isDone(); i = keyIterator.next()) {
  //   console.log(i);
  // }
  // const valIterator = map.createValIterator();
  // for (let i = valIterator.first(); !valIterator.isDone(); i = valIterator.next()) {
  //   console.log(i);
  // }
}

abstract class Collection {
  public keyVault: Array<any> = [];
  public valueVault: Array<any> = [];

  public abstract createKeyIterator(): Iterator;

  public abstract createValIterator(): Iterator;
}

export class Map extends Collection {
  constructor() {
    super();
  }

  private getInd(key: any): number {
    return this.keyVault.indexOf(key);
  }

  public createKeyIterator() {
    return new KeyIterator(this);
  }

  public createValIterator() {
    return new ValIterator(this);
  }

  public get size(): number {
    return this.keyVault.length;
  }

  public has(key: any): boolean {
    return this.keyVault.includes(key);
  }

  public set(key: any, val: any): boolean | Error {
    let res: boolean | Error;
    if (!this.has(key)) {
      this.keyVault.push(key);
      this.valueVault.push(val);
      res = this.get(key) === val;
    } else {
      res = new Error('Key has been existing!');
    }
    return res;
  }

  public get(key: any): any {
    const ind = this.getInd(key);
    return ind !== -1 ? this.valueVault[ind] : false;
  }

  public delete(key: any): boolean {
    const ind = this.getInd(key);
    if (ind !== -1) {
      this.keyVault.splice(ind, 1);
      this.valueVault.splice(ind, 1);
    }
    return this.has(key);
  }
}

interface Enumerator {
  first(): any;

  currentItem(): any;

  next(): any;

  isDone(): boolean;
}

abstract class Iterator implements Enumerator {
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
