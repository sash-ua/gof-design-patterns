import {Injectable} from '@angular/core';
import {Car, FiestaFocusCarFactory} from './abstract-factory/abstract-factory-example';


@Injectable({
  providedIn: 'root'
})
export class AbstractFactoryService {

  constructor() {
  }

  makeCar(obj: Car): string {
    const factory = new FiestaFocusCarFactory();
    const car = factory.createCar(obj);
    return car;
  }
}

