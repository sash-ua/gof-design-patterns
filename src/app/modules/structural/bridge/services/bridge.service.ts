import {Injectable} from '@angular/core';
import {bridge} from './bridge/bridge';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {

  constructor() {
  }

  bridge() {
    bridge();
  }
}
