import {InjectionToken} from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken('Browser localStorage', {providedIn: 'root', factory: () => localStorage});
