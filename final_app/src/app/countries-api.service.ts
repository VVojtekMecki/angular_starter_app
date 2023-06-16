import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {
  private apiUrl = 'https://restcountries.com/v3.1/name';
  public countryData: any;

  constructor(private http: HttpClient) { }

  getCountryInfo(countryName: string): Observable<any> {
    const url = `${this.apiUrl}/${countryName}`;
    return this.http.get<any>(url).pipe(
      catchError((error: any) => {
        console.error('An error occurred:', error);
        throw error;
      })
    );
  }

  getCountryData(countryName: string): Observable<any> {
    return this.getCountryInfo(countryName);
  }

  // countryDataToArray(countryName: string): any {
  //   this.getCountryInfo(countryName).subscribe(
  //     (data) => {
  //       console.log('Country data:', data);
  //       this.countryData = data;
  //       return this.countryData;
  //     },
  //     (error) => {
  //       console.error('An error occurred:', error);
  //       var empty_arr = ["Error"];
  //       return empty_arr;
  //     }
  //   );
  // }


}
