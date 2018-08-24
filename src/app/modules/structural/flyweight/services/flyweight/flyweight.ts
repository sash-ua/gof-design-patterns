export function flyweight() {
  const printer = new Printer();
  const printA = printer.get('a');
  printA.config({value: 'a'});
  // console.log(printA.draw());
  const printB = printer.get('b');
  printB.config({value: 'b'});
  // console.log(printB.draw());
  // console.log(printB);
  printer.remove('a');
}

export type State = { value: string, font?: string, color?: string };

export class Printer {
  private pool: Map<string, Symbol> = new Map();

  private set(key): void {
    this.pool.set(key, new Character());
  }

  public get(key: string): Symbol {
    if (!this.pool.has(key)) {
      this.set(key);
    }
    return this.pool.get(key);
  }

  public remove(key: string): void {
    this.pool.delete(key);
  }
}

interface Symbol {
  config(config: State): void;

  draw(): string;
}

export class Character implements Symbol {
  private state: State = {value: '', font: 'Times New Roman', color: 'black'};

  constructor() {
  }

  public config(config: State): void {
    this.state = Object.assign(this.state, config);
  }

  public draw(): string {
    return this.state.value;
  }
}
