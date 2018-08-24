import {Injectable} from '@angular/core';
import {strategy} from './strategy/strategy';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  constructor() {
  }

  strategy() {
    strategy();
  }
}
