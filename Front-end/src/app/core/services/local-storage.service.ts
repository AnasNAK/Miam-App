import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    
  setItem(key: string, value: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(value as string));
    } catch {
      localStorage.setItem(key, value as string);
    }
  }

  getItem(key: string) : unknown {
    const value  = localStorage.getItem(key);
    try {
        return JSON.parse(value as string);
    } catch (error) {
        return value;
    }
  }

  removeItem(key :  string ) {
    localStorage.removeItem(key)
  }
}
