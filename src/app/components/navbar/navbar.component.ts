import { Component, HostListener, inject, signal } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly scrollService = inject(ScrollService);

  readonly links: NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'My Work' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'resume', label: 'Resume' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly activeSection = this.scrollService.activeSection;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 60);
    this.scrollService.updateActiveSection(this.links.map((l) => l.id));
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  navigate(id: string): void {
    this.scrollService.scrollTo(id);
    this.menuOpen.set(false);
  }
}
