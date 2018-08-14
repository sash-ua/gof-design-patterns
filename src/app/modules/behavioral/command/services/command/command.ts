export class ControllerInvoker {
  private stack: Map<number, Command>;
  private indx = 0;

  constructor() {
    this.stack = new Map<number, Command>();
  }

  private saveToStack(arg: Command) {
    this.stack.set(this.indx, arg);
  }

  public execCommand(arg: Command) {
    this.saveToStack(arg);
    return this.stack.get(this.indx++).execute();
  }

  cashedResult(id: number) {
    return this.stack.has(id) ? this.stack.get(id).result : 'No result by the ID';
  }

  public before() {
    this.indx = this.indx > 0 ? --this.indx : 0;
  }

  public after() {
    const l = this.stack.size - 1;
    this.indx = this.indx < l ? ++this.indx : l;
  }

  public clear() {
    this.stack = new Map<number, Command>();
  }
}

export abstract class Command {
  public result: number | string;

  protected constructor(protected arf: Receiver, public args: [number, number]) {
  }

  abstract execute(): number | string;
}

export class Add extends Command {
  public result: number | string;

  constructor(protected arf: Receiver, public args: [number, number]) {
    super(arf, args);
  }

  execute(): number | string {
    this.result = this.arf.run((args) => args[0] + args[1], this.args);
    return this.result;
  }
}

export class Sub extends Command {
  public result: number | string;

  constructor(protected arf: Receiver, public args: [number, number]) {
    super(arf, args);
  }

  execute(): number | string {
    this.result = this.arf.run((args) => args[0] - args[1], this.args);
    return this.result;
  }
}

export class Div extends Command {
  public result: number | string;

  constructor(protected arf: Receiver, public args: [number, number]) {
    super(arf, args);
  }

  execute(): number | string {
    this.result = this.arf.run((args) => args[1] !== 0 ? args[0] / args[1] : 'Cannot divide by zero', this.args);
    return this.result;
  }
}

export class Mult extends Command {
  public result: number | string;

  constructor(protected arf: Receiver, public args: [number, number]) {
    super(arf, args);
  }

  execute(): number | string {
    this.result = this.arf.run((args) => args[0] * args[1], this.args);
    return this.result;
  }
}


export class Receiver {
  public run(fn: Function, ...args: Array<any>): any {
    return fn(...args);
  }
}
