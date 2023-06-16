import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesApiService } from '../countries-api.service'

@Component({
  selector: 'app-countries-data-container',
  templateUrl: './countries-data-container.component.html',
  styleUrls: ['./countries-data-container.component.css']
})
export class CountriesDataContainerComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  public countryData: any;

  public firstCountryData: any;
  public secondCountryData: any;

  FIRST_COUNTRY = 'Germany';
  SECOND_COUNTRY = 'Poland';



  constructor(
    private formBuilder: FormBuilder,
    private countryService: CountriesApiService
  ) { }

  checkWeather(): void {
    if (this.weatherSearchForm.valid) {
      // console.log(this.weatherSearchForm.value);
      // const cityName = this.weatherSearchForm.value.city;
      // this.countryService.getCountryData(cityName).subscribe(
      //   (data) => {
      //     this.countryData = data[0];
      //   },
      //   (error) => {
      //     console.error('An error occurred:', error);
      //   }
      // );
    }
    this.countryService
      .getCountryData(this.FIRST_COUNTRY)
      .subscribe(
        (data) => { this.firstCountryData = data[0]; });

    this.countryService
      .getCountryData(this.SECOND_COUNTRY)
      .subscribe(
        (data) => { this.secondCountryData = data[0]; });
  }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      city: ['', Validators.required]
    });
    this.checkWeather();
  }

  onRefresh(): void {
    this.checkWeather();
  }
}
