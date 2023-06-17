import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent {
  @Input() searchHistory: any[] = [];

  constructor(private router: Router) {}

  clearSearchHistory(): void {
    // Clear searchHistory in LocalStorageService
    // Code for clearing LocalStorageService goes here
    this.searchHistory = [];
  }

  goBack(): void {
    this.router.navigate(['/main']);
  }

  getComponentTitle(index: number): string {
    if (index === 0) {
      return 'Your search';
    } else if (index === 1) {
      return 'The previous search';
    } else {
      return `Search ${index + 1}`;
    }
  }
}
