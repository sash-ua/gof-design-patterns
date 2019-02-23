import {Inject, Injectable} from '@angular/core';
import {CacheEntry} from '../caching/caching.service';
import {BROWSER_STORAGE} from '../browser/local-storage/local-storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(@Inject(BROWSER_STORAGE) private ls: Storage) {
  }

  public save(cacheName: string, data: Map<string, CacheEntry>): void {
    this.ls.setItem(cacheName, JSON.stringify(Array.from(data.entries())));
  }

  public get(cacheName: string): Map<string, CacheEntry> {
    return new Map(JSON.parse(this.ls.getItem(cacheName)));
  }

  public delete(cacheName: string): void {
    this.ls.removeItem(cacheName);
  }
}
