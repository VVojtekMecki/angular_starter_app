import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesApiService } from '../countries-api.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-countries-data-container',
  templateUrl: './countries-data-container.component.html',
  styleUrls: ['./countries-data-container.component.css']
})
export class CountriesDataContainerComponent implements OnInit {
  public countrySearchForm!: FormGroup;
  public searchHistory: any[] = [];
  public showPopup: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private countryService: CountriesApiService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.countrySearchForm = this.formBuilder.group({
      city: ['', Validators.required]
    });

    // Retrieve searchHistory from LocalStorageService
    this.searchHistory = this.localStorageService.getSearchHistory();
  }

  addSearchHistory(): void {
    if (this.countrySearchForm.valid) {
      const cityName = this.countrySearchForm.value.city;
      this.countryService.getCountryData(cityName).subscribe(
        (data) => {
          this.searchHistory.unshift(data[0]);
          // Update searchHistory in LocalStorageService
          this.localStorageService.setItem('searchHistory', JSON.stringify(this.searchHistory));
        },
        (error) => {
          console.error('An error occurred:', error);
          if (error.status === 404) {
            this.showPopup = true; // Show the popup when a 404 error occurs
          }
        }
      );
    }
    this.countrySearchForm.get('city')?.setValue('');
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

  handleSearchHistoryClicked(): void {
    // Handle the search history button click event here
  }

  onRefresh(): void {
    this.addSearchHistory();
  }

  closePopup() {
    this.showPopup = false; // Hide the popup when the close button is clicked
  }
}
