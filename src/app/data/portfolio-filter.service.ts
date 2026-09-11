import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PortfolioFilterService {
  readonly activeFilter = signal<string>('*');

  setFilter(value: string): void {
    this.activeFilter.set(value);
  }
}