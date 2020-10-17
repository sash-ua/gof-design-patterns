import {Injectable} from '@angular/core';
import {calculator} from './command/command';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  public calculator() {
    calculator();
  }
}
