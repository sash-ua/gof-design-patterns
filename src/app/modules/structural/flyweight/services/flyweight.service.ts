import {Injectable} from '@angular/core';
import {Printer} from './flyweight/flyweight';

@Injectable({
  providedIn: 'root'
})
export class FlyweightService {

  constructor() {
  }

  flyweight() {
    const printer = new Printer();
    const printA = printer.get('a');
    printA.config({value: 'a'});
    // console.log(printA.draw());
    const printB = printer.get('b');
    printB.config({value: 'b'});
    // console.log(printB.draw());
    // console.log(printB);
    // console.log(printer.pool);
    printer.remove('a');
  }
}
