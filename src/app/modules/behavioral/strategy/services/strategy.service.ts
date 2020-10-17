import {Injectable} from '@angular/core';
import {strategy} from './strategy/strategy';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {
  strategy() {
    strategy();
  }
}
