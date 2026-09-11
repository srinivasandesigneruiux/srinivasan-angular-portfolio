import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { PortfolioFilterService } from '../../data/portfolio-filter.service';

@Component({
  selector: 'app-work-section',
  standalone: true,
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.css',
})
export class WorkSectionComponent {
  private readonly scrollService = inject(ScrollService);
  private readonly filterService = inject(PortfolioFilterService);

  showFilteredWork(filter: string): void {
    this.filterService.setFilter(filter);
    this.scrollService.scrollTo('portfolio');
  }
}
