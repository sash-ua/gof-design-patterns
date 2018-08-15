abstract class Collection {
  public keyVault: Array<any> = [];
  public valueVault: Array<any> = [];

  public abstract createKeyIterator(): KeyIterator;
}

export class Map extends Collection {
  constructor() {
    super();
  }

  createKeyIterator() {
    return new KeyIterator(this);
  }

  createValIterator() {
    return new ValIterator(this);
  }

  public get size(): number {
    return this.keyVault.length;
  }

  has(key: any): boolean {
    return this.keyVault.includes(key);
  }

  set(key: any, val: any): boolean | Error {
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

  get(key: any): any {
    const ind = this.getInd(key);
    return ind !== -1 ? this.valueVault[ind] : false;
  }

  delete(key: any): boolean {
    const ind = this.getInd(key);
    if (ind !== -1) {
      this.keyVault.splice(ind, 1);
      this.valueVault.splice(ind, 1);
    }
    return this.has(key);
  }

  private getInd(key: any): number {
    return this.keyVault.indexOf(key);
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

  constructor(public iterable: Map) {
  }

  protected abstract getItem(ind: number);

  first(): any {
    return this.getItem(0);
  }

  currentItem(): any {
    return this.getItem(this.current);
  }

  next(): any {
    return this.current++ < this.iterable.size - 1 ? this.getItem(this.current) : null;
  }

  isDone(): boolean {
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
