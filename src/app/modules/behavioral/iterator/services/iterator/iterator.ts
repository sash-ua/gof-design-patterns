abstract class Collection {
  public keyVault: Array<any> = [];
  public valueVault: Array<any> = [];
  protected mapSize: number;

  protected abstract getEnumerator(): Enumerator;
}

export class Map extends Collection {
  private iterator: Enumerator;

  constructor() {
    super();
    this.iterator = this.getEnumerator();
    this.mapSize = this.iterator.size();
  }

  public get size(): number {
    return this.mapSize;
  }

  public has(key): boolean {
    return this.iterator.has(key);
  }

  public set(key: any, val: any): any {
    const res = this.iterator.set(key, val);
    this.mapSize = this.iterator.size();
    return res;
  }

  public get(key: any): any {
    return this.iterator.get(key);
  }

  public delete(key: any) {
    this.iterator.delete(key);
    this.mapSize = this.iterator.size();
  }

  protected getEnumerator(): Enumerator {
    return new Iterator(this);
  }
}

interface Enumerator {
  size(): number;

  has(key: any): boolean;

  set(key: any, val: any): boolean | Error;

  get(key: any): any;

  delete(key: any): void;
}

export class Iterator implements Enumerator {
  constructor(public iterable: Collection) {
  }

  size(): number {
    return this.iterable.keyVault.length;
  }

  has(key: any): boolean {
    return this.iterable.keyVault.includes(key);
  }

  set(key: any, val: any): boolean | Error {
    let res: boolean | Error;
    if (!this.has(key)) {
      this.iterable.keyVault.push(key);
      this.iterable.valueVault.push(val);
      res = this.get(key) === val;
    } else {
      res = new Error('Key has been existing!');
    }
    return res;
  }

  get(key: any): any {
    const ind = this.getInd(key);
    return ind !== -1 ? this.iterable.valueVault[ind] : false;
  }

  delete(key: any): boolean {
    const ind = this.getInd(key);
    if (ind !== -1) {
      this.iterable.keyVault.splice(ind, 1);
      this.iterable.valueVault.splice(ind, 1);
    }
    return this.has(key);
  }

  private getInd(key: any): number {
    return this.iterable.keyVault.indexOf(key);
  }
}
