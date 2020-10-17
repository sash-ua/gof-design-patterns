import {Injectable} from '@angular/core';
import {flyweight} from './flyweight/flyweight';

@Injectable({
  providedIn: 'root'
})
export class FlyweightService {
  flyweight() {
    flyweight();
  }
}
