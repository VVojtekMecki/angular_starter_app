import { Injectable } from '@angular/core';

export const AUTH_TOKEN_KEY = 'token';
export const AUTH_TOKEN_VALUE = 'token_from_auth_server';
export const SEARCH_HISTORY_KEY = 'searchHistory';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getItem(key: string) {
    return localStorage.getItem(key);
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }

  public setSearchHistory(searchHistory: any[]) {
    this.setItem(SEARCH_HISTORY_KEY, JSON.stringify(searchHistory));
  }

  public getSearchHistory(): any[] {
    const storedSearchHistory = this.getItem(SEARCH_HISTORY_KEY);
    return storedSearchHistory ? JSON.parse(storedSearchHistory) : [];
  }

  public clearSearchHistory() {
    this.removeItem(SEARCH_HISTORY_KEY);
  }
}
