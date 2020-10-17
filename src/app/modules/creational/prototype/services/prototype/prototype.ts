export function prototype() {
  const proto = new Keratinocytes();
  const clone = proto.clone();
  console.log('proto size', proto.size);
  console.log('clone size', clone.size);
  proto.feedsOn([1, 2, 3]);
  console.log('proto size after eating', proto.size);
  console.log('clone size', clone.size);
}

interface Cell {
  feedsOn(nutrients: Array<any>): void;

  clone(): Cell;
}

abstract class Epidermis implements Cell {
  public abstract size: number;

  public abstract feedsOn(nutrients: Array<any>): void;

  public abstract clone(): Cell;

  protected growth(m: number): number {
    return this.size += m / 10;
  }
}

class Keratinocytes extends Epidermis {
  private _size = 1;

  constructor() {
    super();
  }

  public get size(): number {
    return this._size;
  }

  public set size(d: number) {
    this._size = d;
  }

  public feedsOn(nutrients: Array<any>) {
    this.size = this.growth(nutrients.length);
  }

  public clone() {
    return new Keratinocytes();
  }
}


