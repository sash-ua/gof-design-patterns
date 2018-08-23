import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  public save(cacheName: string, data: any): void {
    localStorage.setItem(cacheName,  JSON.stringify(Array.from(data.entries())));
  }

  public get(cacheName: string): any {
    return new Map(JSON.parse(localStorage.getItem(cacheName)));
  }

  public delete(cacheName: string): void {
    localStorage.removeItem(cacheName);
  }
}
