import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css',
})
export class HomeSectionComponent {
  private readonly scrollService = inject(ScrollService);

  goToWork(): void {
    this.scrollService.scrollTo('work');
  }
}

