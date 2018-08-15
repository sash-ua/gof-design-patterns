import {Injectable} from '@angular/core';
import {Add, Receiver, Command, ControllerInvoker, Div, Mult, Sub} from './command/command';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private calc: Receiver;
  private controller: ControllerInvoker;

  constructor() {
    this.calc = new Receiver();
    this.controller = new ControllerInvoker();
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

  cashedResult(id) {
    // console.log(this.controller.cashedResult(id));
  }

  private run(arg: Command) {
    return this.controller.execCommand(arg);
  }

  add(args: [number, number]): void {
    // console.log(this.run(new Add(this.calc, args)));
  }

  sub(args: [number, number]): void {
    // console.log(this.run(new Sub(this.calc, args)));
  }

  div(args: [number, number]): void {
    // console.log(this.run(new Div(this.calc, args)));
  }

  mult(args: [number, number]): void {
    // console.log(this.run(new Mult(this.calc, args)));
  }
}
