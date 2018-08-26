import {Enumerator, KeyIterator, ValIterator} from './iterator';

abstract class Collection {
  public keyVault: Array<any> = [];
  public valueVault: Array<any> = [];

  public abstract createKeyIterator(): Enumerator;

  public abstract createValIterator(): Enumerator;
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
