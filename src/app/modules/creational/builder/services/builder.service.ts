import {Injectable} from '@angular/core';
import {buildHouse} from './builder/builder';


@Injectable({
  providedIn: 'root'
})
export class BuilderService {

  constructor() {
  }

  buildHouse() {
    buildHouse();
  }
}
