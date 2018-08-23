export interface Cell {
  size: number;

  eat(nutrients: Array<any>): void;

  growth(m: number): number;

  clone(): Cell;
}

abstract class Epidermis implements Cell {
  size: number;

  abstract eat(nutrients: Array<any>): void;

  abstract clone(): Cell;

  growth(m: number): number {
    return this.size += m / 10;
  }
}

export class Keratinocytes extends Epidermis {
  public size = 1;

  constructor() {
    super();
  }

  eat(nutrients: Array<any>) {
    this.size = this.growth(nutrients.length);
  }

  public clone() {
    return new Keratinocytes();
  }
}


