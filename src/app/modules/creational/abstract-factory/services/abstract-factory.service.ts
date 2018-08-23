import {Injectable} from '@angular/core';
import {Car, FiestaFocusCarFactory} from './abstract-factory/abstract-factory';


@Injectable({
  providedIn: 'root'
})
export class AbstractFactoryService {

  constructor() {
  }

  makeCar(obj: Car): string {
    const factory = new FiestaFocusCarFactory();
    return factory.createCar(obj);
  }

  abstractFactory() {
    const fiesta = this.makeCar({name: 'Fiesta', power: 70});
    const focus = this.makeCar({name: 'Focus', power: 80});
    const mustang = this.makeCar({name: 'mustang', power: 120});
    // console.log('AbstractFactory:', fiesta);
    // console.log('AbstractFactory:', focus);
    // console.log('AbstractFactory:', mustang);
  }
}

