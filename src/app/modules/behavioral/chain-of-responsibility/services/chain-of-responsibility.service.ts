import {Injectable} from '@angular/core';
import {chainOfResponsibility} from './chain-of-responsibility/chain-of-responsibility';

@Injectable({
  providedIn: 'root'
})
export class ChainOfResponsibilityService {
  chainOfResponsibility() {
    chainOfResponsibility();
  }
}
