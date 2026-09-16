import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  /** id of the section currently in view, used to highlight the nav link */
  readonly activeSection = signal<string>('home');

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (!el) {
      return;
    }
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.activeSection.set(sectionId);
  }

  updateActiveSection(sectionIds: string[]): void {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el && el.offsetTop <= scrollPos) {
        this.activeSection.set(sectionIds[i]);
        return;
      }
    }
  }
}

