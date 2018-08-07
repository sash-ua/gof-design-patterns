export type State = { value: string, font?: string, color?: string };

export class Printer {
  private pool: Map<string, Symbol> = new Map();

  private set(key): void {
    this.pool.set(key, new Character());
  }

  public get(key: string) {
    if (!this.pool.has(key)) {
      this.set(key);
    }
    return this.pool.get(key);
  }

  public remove(key: string) {
    this.pool.delete(key);
  }
}

interface Symbol {
  config(config: State);

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
