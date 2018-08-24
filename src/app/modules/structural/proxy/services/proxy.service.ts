import {Injectable} from '@angular/core';
import {proxyE} from './proxy/proxy';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  constructor() {
  }

  proxy() {
    proxyE();
  }
}
