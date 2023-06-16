import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  @Input()
  public countryData: any;

@Output()
refreshEvent = new EventEmitter();

  constructor(
  ) { }

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
  }

  onRefresh(): void {
    this.refreshEvent.emit();
    }
}
