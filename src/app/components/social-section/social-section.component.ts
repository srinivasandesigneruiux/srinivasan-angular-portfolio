import { Component } from '@angular/core';

interface SocialLink {
  cssClass: string;
  icon: string;
  eyebrow: string;
  title: string;
  href: string;
}

@Component({
  selector: 'app-social-section',
  standalone: true,
  templateUrl: './social-section.component.html',
  styleUrl: './social-section.component.css',
})
export class SocialSectionComponent {
  readonly links: SocialLink[] = [
    { cssClass: 'facebook', icon: 'fa-brands fa-facebook', eyebrow: 'Follow me on', title: 'Social Facebook', href: '#' },
    { cssClass: 'Linkedin', icon: 'fa-brands fa-linkedin-in', eyebrow: 'Contact me on', title: 'Social Linkedin', href: '#' },
    { cssClass: 'Behance', icon: 'fa-brands fa-square-behance', eyebrow: 'Get to Touch', title: 'Social Behance', href: '#' },
  ];
}
