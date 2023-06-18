import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchHistoryComponent } from './search-history.component';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

describe('SearchHistoryComponent', () => {
  let component: SearchHistoryComponent;
  let fixture: ComponentFixture<SearchHistoryComponent>;
  let router: jasmine.SpyObj<Router>;
  let localStorageService: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const localStorageServiceSpy = jasmine.createSpyObj('LocalStorageService', ['getItem', 'clearSearchHistory']);
    TestBed.configureTestingModule({
      declarations: [SearchHistoryComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: LocalStorageService, useValue: localStorageServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchHistoryComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    localStorageService = TestBed.inject(LocalStorageService) as jasmine.SpyObj<LocalStorageService>;
  });

  it('should clear search history and update component state', () => {
    component.searchHistory = ['Search 1', 'Search 2'];

    component.clearSearchHistory();

    expect(localStorageService.clearSearchHistory).toHaveBeenCalled();
    expect(component.searchHistory).toEqual([]);
  });

  it('should load search history from local storage on initialization', () => {
    const mockSearchHistory = ['Search 1', 'Search 2'];
    localStorageService.getItem.and.returnValue(JSON.stringify(mockSearchHistory));

    component.ngOnInit();

    expect(localStorageService.getItem).toHaveBeenCalledWith('searchHistory');
    expect(component.searchHistory).toEqual(mockSearchHistory);
  });

  it('should navigate to main page when goBack is called', () => {
    component.goBack();

    expect(router.navigate).toHaveBeenCalledWith(['/main']);
  });
});
