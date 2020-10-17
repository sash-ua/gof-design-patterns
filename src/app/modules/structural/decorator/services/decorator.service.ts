import {Injectable} from '@angular/core';
import {decorator} from './decorator/decorator';

@Injectable({
  providedIn: 'root'
})
export class DecoratorService {
  decorator() {
    decorator();
  }
}
