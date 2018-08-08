import {Injectable} from '@angular/core';
import {SunSingleton} from './singleton/singleton-example';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {

  constructor() {
  }

  singleton() {
    const sun1 = SunSingleton.SunInstance;
    const sun2 = SunSingleton.SunInstance;
    // console.log('sun1 === sun2', sun1 === sun2); //true
    // console.log(sun1.shining()); //0
    // console.log(sun2.shining());  //1
  }
}
