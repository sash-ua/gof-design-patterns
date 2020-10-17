import {Injectable} from '@angular/core';
import {factoryMethod} from './factory-method/factory-method';

@Injectable({
  providedIn: 'root'
})
export class FactoryMethodService {
  factoryMethod() {
    factoryMethod();
  }
}
