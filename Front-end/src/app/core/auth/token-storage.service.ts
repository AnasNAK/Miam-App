import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({ providedIn: 'root' })
export class TokenStorageService {
  static readonly JWT_KEY: string = 'access_token';

  constructor(private storageService: LocalStorageService) {
    this.storageService = storageService;
  }
  getAccessToken(): string {
    return this.storageService.getItem(TokenStorageService.JWT_KEY) as string;
  }

  saveAccessToken(token: string): void {
    this.storageService.setItem(TokenStorageService.JWT_KEY, token);
  }

  removeAccessToken(): void {
    localStorage.removeItem(TokenStorageService.JWT_KEY);
  }
}
