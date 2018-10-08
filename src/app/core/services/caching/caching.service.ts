import {Injectable} from '@angular/core';
import {GitContentResponse} from '../http/get-git-content.service';
import {StorageService} from '../storage/storage.service';
import {HttpResponse} from '@angular/common/http';
import {CONSTS} from '../../../constants';

const maxAge = 60000;

export interface CacheEntry {
  reqUrl: string;
  response: HttpResponse<GitContentResponse>;
  lastRead: number;
}

@Injectable({
  providedIn: 'root'
})
export class CachingService {
  private name = CONSTS.cacheName;
  private cache: Map<string, CacheEntry>;

  constructor(private storage: StorageService) {
  }

  private update(): void {
    const c = this.storage.get(this.name);
    if (c) {
      this.cache = c;
      const expired = Date.now() - maxAge;
      this.cache.forEach((entry, url) => {
        if (entry.lastRead < expired) {
          this.cache.delete(url);
        }
      });
    } else {
      this.cache = new Map<string, CacheEntry>();
    }
  }

  public set(reqUrl: string, response: HttpResponse<GitContentResponse>): void {
    const entry: CacheEntry = {reqUrl, response, lastRead: Date.now()};
    this.update();
    this.cache.set(reqUrl, entry);
    this.storage.save(this.name, this.cache);
  }

  public get(reqUrl: string): HttpResponse<GitContentResponse> | undefined {
    this.update();
    const cached = this.cache.get(reqUrl);
    return cached ? cached.response : undefined;
  }
}
