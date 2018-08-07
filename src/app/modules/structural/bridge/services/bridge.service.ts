import {Injectable} from '@angular/core';
import {OneOfFordCar, FordFiesta, FordMustang} from './bridge/bridge-example';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {

  constructor() {
  }

  bridge() {
    // Refined abstraction get implementer.
    const fiesta = new OneOfFordCar(new FordFiesta());
    // console.log(fiesta.name());
    // console.log(fiesta.currSpeed());
    // fiesta.start();
    // console.log(fiesta.currSpeed());
    // fiesta.speedUp(200);
    // console.log(fiesta.currSpeed());
    // fiesta.speedUp(250);
    // console.log(fiesta.currSpeed());
    const mustang = new OneOfFordCar(new FordMustang());
    // console.log(mustang.name());
    // console.log(mustang.currSpeed());
    // mustang.start();
    // console.log(mustang.currSpeed());
    // mustang.speedUp(200);
    // console.log(mustang.currSpeed());
    // mustang.speedUp(270);
    // console.log(mustang.currSpeed());
  }

}
