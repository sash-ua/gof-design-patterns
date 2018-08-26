import {Injectable} from '@angular/core';
import {CacheEntry} from '../caching/caching.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  public save(cacheName: string, data: Map<string, CacheEntry>): void {
    localStorage.setItem(cacheName, JSON.stringify(Array.from(data.entries())));
  }

  public get(cacheName: string): Map<string, CacheEntry> {
    return new Map(JSON.parse(localStorage.getItem(cacheName)));
  }

  public delete(cacheName: string): void {
    localStorage.removeItem(cacheName);
  }
}
