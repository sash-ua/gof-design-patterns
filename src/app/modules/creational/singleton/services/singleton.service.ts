import {Injectable} from '@angular/core';
import {singleton} from './singleton/singleton';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {
  singleton() {
    singleton();
  }
}
