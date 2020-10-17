import {Injectable} from '@angular/core';
import {prototype} from './prototype/prototype';

@Injectable({
  providedIn: 'root'
})
export class PrototypeService {
  prototype() {
    prototype();
  }
}
