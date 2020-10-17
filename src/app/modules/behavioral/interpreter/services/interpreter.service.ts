import {Injectable} from '@angular/core';
import {interpreter} from './interpreter/interpreter';

@Injectable({
  providedIn: 'root'
})
export class InterpreterService {
  interpreter(v: any): any {
    return interpreter(v);
  }
}
