export function calculator() {
  const calc = new CalculatorService();
  calc.add([1, 2]);
  calc.cashedResult(0);
  calc.sub([1, 2]);
  calc.div([1, 2]);
  calc.div([1, 0]);
  calc.mult([22, 2]);
  calc.undo();
  calc.mult([22, 3]);
}

export class CalculatorService {
  private calc: Receiver;
  private controller: ControllerInvoker;

  constructor() {
    this.calc = new Receiver();
    this.controller = new ControllerInvoker();
  }

  private run(arg: Command) {
    return this.controller.execCommand(arg);
  }

  public undo(): void {
    this.controller.before();
  }

  public redo() {
    this.controller.after();
  }

  public clear() {
    this.controller.clear();
  }

  public cashedResult(id) {
    console.log(this.controller.cashedResult(id));
  }

  public add(args: [number, number]): void {
    console.log(this.run(new Add(this.calc, args)));
  }

  public sub(args: [number, number]): void {
    console.log(this.run(new Sub(this.calc, args)));
  }

  public div(args: [number, number]): void {
    console.log(this.run(new Div(this.calc, args)));
  }

  public mult(args: [number, number]): void {
    console.log(this.run(new Mult(this.calc, args)));
  }
}

class ControllerInvoker {
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
    return this.stack.has(id) ? this.stack.get(id).result : 'No check by the ID';
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

abstract class Command {
  protected _result: number | string;
  public get result(): number | string {
    return this._result;
  }

  public set result(arg: number | string) {
    this._result = arg;
  }

  abstract execute(): number | string;
}

class Add extends Command {
  constructor(protected arf: Receiver, public args: [number, number]) {
    super();
  }

  execute(): number | string {
    this.result = this.arf.run((args) => args[0] + args[1], this.args);
    return this.result;
  }
}

class Sub extends Command {
  constructor(protected arf: Receiver, public args: [number, number]) {
    super();
  }

  execute(): number | string {
    this.result = this.arf.run((args) => args[0] - args[1], this.args);
    return this.result;
  }
}

class Div extends Command {
  constructor(protected arf: Receiver, public args: [number, number]) {
    super();
  }

  execute(): number | string {
    this.result = this.arf.run((args) => args[1] !== 0 ? args[0] / args[1] : 'Cannot divide by zero', this.args);
    return this.result;
  }
}

class Mult extends Command {
  constructor(protected arf: Receiver, public args: [number, number]) {
    super();
  }

  execute(): number | string {
    this.result = this.arf.run((args) => args[0] * args[1], this.args);
    return this.result;
  }
}

class Receiver {
  public run(fn: Function, ...args: Array<any>): any {
    return fn(...args);
  }
}
