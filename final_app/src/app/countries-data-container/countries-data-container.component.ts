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
  public weatherSearchForm!: FormGroup;
  public searchHistory: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private countryService: CountriesApiService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      city: ['', Validators.required]
    });

    // Retrieve searchHistory from LocalStorageService
    this.searchHistory = this.localStorageService.getSearchHistory();
  }

  checkWeather(): void {
    if (this.weatherSearchForm.valid) {
      const cityName = this.weatherSearchForm.value.city;
      this.countryService.getCountryData(cityName).subscribe(
        (data) => {
          this.searchHistory.unshift(data[0]);
          // Update searchHistory in LocalStorageService
          this.localStorageService.setItem('searchHistory', JSON.stringify(this.searchHistory));
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      );
    }
    this.weatherSearchForm.get('city')?.setValue('');
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

  handleSearchHistoryClicked(): void {
    // Handle the search history button click event here
  }

  onRefresh(): void {
    this.checkWeather();
  }
}
