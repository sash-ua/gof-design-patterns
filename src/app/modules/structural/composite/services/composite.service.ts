import {Injectable} from '@angular/core';
import {composite} from './composite/composite';

@Injectable({
  providedIn: 'root'
})
export class CompositeService {
  composite() {
    composite();
  }
}
