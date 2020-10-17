import {Injectable} from '@angular/core';
import {facade} from './facade/facade';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  facade() {
    facade();
  }
}
