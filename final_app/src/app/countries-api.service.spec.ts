import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CountriesApiService } from './countries-api.service';

describe('CountriesApiService', () => {
  let service: CountriesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CountriesApiService]
    });
    service = TestBed.inject(CountriesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
