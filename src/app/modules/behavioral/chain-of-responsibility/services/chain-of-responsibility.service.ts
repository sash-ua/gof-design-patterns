import {Injectable} from '@angular/core';
import {
  chainOfResponsibility,
  HelpHandler
} from './chain-of-responsibility/chain-of-responsibility';

@Injectable({
  providedIn: 'root'
})
export class ChainOfResponsibilityService {
  dialogHandler: HelpHandler;
  buttonHandler: HelpHandler;
  appHandler: HelpHandler;

  constructor() {
  }

  chainOfResponsibility() {
    chainOfResponsibility();
  }
}
