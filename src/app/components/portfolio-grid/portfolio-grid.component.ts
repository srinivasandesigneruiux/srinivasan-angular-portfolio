import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FILTERS, PORTFOLIO_ITEMS, PortfolioItem } from '../../data/portfolio-data';
import { PortfolioFilterService } from '../../data/portfolio-filter.service';

@Component({
  selector: 'app-portfolio-grid',
  standalone: true,
  templateUrl: './portfolio-grid.component.html',
  styleUrl: './portfolio-grid.component.css',
})
export class PortfolioGridComponent {
  private readonly router = inject(Router);
  private readonly filterService = inject(PortfolioFilterService);

  readonly filters = FILTERS;
  readonly activeFilter = this.filterService.activeFilter;

  private readonly items: PortfolioItem[] = PORTFOLIO_ITEMS;

  readonly visibleItems = computed<PortfolioItem[]>(() => {
    const filter = this.activeFilter();
    if (filter === '*') {
      return this.items;
    }
    return this.items.filter((item) => item.filters.includes(filter));
  });

  setFilter(value: string): void {
    this.filterService.setFilter(value);
  }

  openProject(id: string): void {
    this.router.navigateByUrl(`/portfolio/${id}`);
  }
}

