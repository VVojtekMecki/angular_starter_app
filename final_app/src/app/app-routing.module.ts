import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { CountriesDataContainerComponent } from './countries-data-container/countries-data-container.component'
import { SearchHistoryComponent } from './search-history/search-history.component'

const routes: Routes = [
  {
  path: 'main',
  component: CountriesDataContainerComponent
  },
  { path: 'search-history',
  component: SearchHistoryComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
