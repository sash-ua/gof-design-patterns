import {Injectable} from '@angular/core';
import {ElementA, ElementB, ElementsController, VisitorAlfa, VisitorBeta} from './visitor/visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor() {
  }

  visitior() {
    const controller = new ElementsController();
    controller.add(new ElementA());
    controller.add(new ElementB());
    // controller.accept(new VisitorAlfa());
    // controller.accept(new VisitorBeta());
  }
}
