import {Injectable} from '@angular/core';
import {Car, FocusFactory, MustangFactory, ProductFactory} from './factory-method/factory-method-example';

@Injectable({
  providedIn: 'root'
})
export class FactoryMethodService {

  constructor() {
  }

  createProduct(name) {
    switch (name) {
      case 'Mustang ':
        return new MustangFactory().createProduct();
      case 'Mustang turbo':
        return new MustangFactory().createProduct(true);
      case 'Focus':
        return new FocusFactory().createProduct();
      default:
        return 'You should create a relevant Factory';
    }
  }
}
