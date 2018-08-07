import {Injectable} from '@angular/core';
import {Proxy, RealSubject} from './proxy/proxy';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  constructor() {
  }

  proxy() {
    const rs: RealSubject = new RealSubject();
    const proxy: Proxy = new Proxy(rs);
    // proxy.request('some request');
  }
}
