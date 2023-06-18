import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent {
  @Input() searchHistory: any[] = [];

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  clearSearchHistory(): void {
    // Clear searchHistory in LocalStorageService
    this.localStorageService.clearSearchHistory();
    this.searchHistory = [];
  }

  ngOnInit(): void {
    const storedSearchHistory = this.localStorageService.getItem('searchHistory');
    if (storedSearchHistory) {
      this.searchHistory = JSON.parse(storedSearchHistory);
    }
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
      return `${index + 1}. search`;
    }
  }
}
