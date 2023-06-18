import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesDataContainerComponent } from './countries-data-container.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CountriesApiService } from '../countries-api.service';
import { LocalStorageService } from '../local-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent }from '../navbar/navbar.component'

describe('CountriesDataContainerComponent', () => {
  let component: CountriesDataContainerComponent;
  let fixture: ComponentFixture<CountriesDataContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule],
      declarations: [CountriesDataContainerComponent, NavbarComponent],
      providers: [CountriesApiService, LocalStorageService, FormBuilder]
    });
    fixture = TestBed.createComponent(CountriesDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
