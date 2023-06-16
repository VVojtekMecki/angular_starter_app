import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesApiService } from '../countries-api.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  public countryData: any;

  constructor(
    private formBuilder: FormBuilder,
    private countryService: CountriesApiService
  ) { }

  checkWeather(): void {
    if (this.weatherSearchForm.valid) {
      console.log(this.weatherSearchForm.value);
      const cityName = this.weatherSearchForm.value.city;
      this.countryService.getCountryData(cityName).subscribe(
        (data) => {
          this.countryData = data[0];
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      );
    }
  }

  formatCurrencies(currencies: any): string {
    if (!currencies) {
      return '';
    }

    const currencyCodes = Object.keys(currencies);
    const formattedCurrencies = currencyCodes.map((code) => {
      const currency = currencies[code];
      return `${currency.name} (${currency.symbol})`;
    });

    return formattedCurrencies.join(', ');
  }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      city: ['', Validators.required]
    });
  }
}
