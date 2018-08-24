import {Injectable} from '@angular/core';
import {abstractFactory} from './abstract-factory/abstract-factory';


@Injectable({
  providedIn: 'root'
})
export class AbstractFactoryService {

  constructor() {
  }

  abstractFactory() {
    abstractFactory();
  }
}

