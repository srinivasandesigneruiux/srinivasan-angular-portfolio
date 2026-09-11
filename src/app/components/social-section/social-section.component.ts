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
    { cssClass: 'facebook', icon: 'fa fa-facebook', eyebrow: 'Follow me on', title: 'Social Facebook', href: '#' },
    { cssClass: 'twitter', icon: 'fa fa-twitter', eyebrow: 'Tweet me on', title: 'Social Twitter', href: '#' },
    { cssClass: 'pinterest', icon: 'fa fa-pinterest', eyebrow: 'Pin me on', title: 'Social Pinterest', href: '#' },
  ];
}
