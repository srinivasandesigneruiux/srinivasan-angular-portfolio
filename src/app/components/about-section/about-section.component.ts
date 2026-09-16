import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
@Component({
  selector: 'app-about-section',
  standalone: true,
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css',
   imports: [
       ScrollRevealDirective,
    ],
})
export class AboutSectionComponent {}

