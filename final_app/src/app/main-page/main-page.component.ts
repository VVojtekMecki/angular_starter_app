import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  @Input() countryData: any;
  @Input() componentTitle: string = 'Title';
  @Output() refreshEvent = new EventEmitter<void>();

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

  onRefresh(): void {
    this.refreshEvent.emit();
  }
}
