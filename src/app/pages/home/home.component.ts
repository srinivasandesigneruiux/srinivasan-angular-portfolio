import { Component } from '@angular/core';
import { HomeSectionComponent } from '../../components/home-section/home-section.component';
import { WorkSectionComponent } from '../../components/work-section/work-section.component';
import { PortfolioCarouselComponent } from '../../components/portfolio-carousel/portfolio-carousel.component';
import { PortfolioGridComponent } from '../../components/portfolio-grid/portfolio-grid.component';
import { ResumeSectionComponent } from '../../components/resume-section/resume-section.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { SocialSectionComponent } from '../../components/social-section/social-section.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeSectionComponent,
    WorkSectionComponent,
    PortfolioCarouselComponent,
    PortfolioGridComponent,
    ResumeSectionComponent,
    AboutSectionComponent,
    SocialSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
