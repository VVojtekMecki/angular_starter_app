import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CountriesApiService} from './countries-api.service';
import { CountriesDataContainerComponent } from './countries-data-container/countries-data-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CountriesDataContainerComponent,
    NavbarComponent,
    SearchHistoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CountriesApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
