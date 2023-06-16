import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesDataContainerComponent } from './countries-data-container.component';

describe('CountriesDataContainerComponent', () => {
  let component: CountriesDataContainerComponent;
  let fixture: ComponentFixture<CountriesDataContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesDataContainerComponent]
    });
    fixture = TestBed.createComponent(CountriesDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
