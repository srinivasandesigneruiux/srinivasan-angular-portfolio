import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CAROUSEL_CARDS, CarouselCard } from '../../data/portfolio-data';

@Component({
  selector: 'app-portfolio-carousel',
  standalone: true,
  templateUrl: './portfolio-carousel.component.html',
  styleUrl: './portfolio-carousel.component.css',
})
export class PortfolioCarouselComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);

  readonly cards: CarouselCard[] = CAROUSEL_CARDS;
  readonly activeIndex = signal(0);

  private dragStartX = 0;
  private dragging = false;

  /** auto-scroll config */
  private readonly autoScrollDelay = 4000; // ms between slides
  private autoScrollTimer: ReturnType<typeof setInterval> | null = null;
  private isPaused = false;

  ngOnInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  private startAutoScroll(): void {
    this.stopAutoScroll();
    this.autoScrollTimer = setInterval(() => {
      if (this.isPaused) {
        return;
      }
      this.activeIndex.update((i) => (i + 1) % this.cards.length);
    }, this.autoScrollDelay);
  }

  private stopAutoScroll(): void {
    if (this.autoScrollTimer) {
      clearInterval(this.autoScrollTimer);
      this.autoScrollTimer = null;
    }
  }

  onMouseEnter(): void {
    this.isPaused = true;
  }

  onMouseLeave(): void {
    this.isPaused = false;
  }

  next(): void {
    this.activeIndex.update((i) => (i + 1) % this.cards.length);
    this.restartAutoScrollTimer();
  }

  prev(): void {
    this.activeIndex.update((i) => (i - 1 + this.cards.length) % this.cards.length);
    this.restartAutoScrollTimer();
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
    this.restartAutoScrollTimer();
  }

  private restartAutoScrollTimer(): void {
    this.startAutoScroll();
  }

  openProject(slug: string): void {
    this.router.navigateByUrl(`/portfolio/${slug}`);
  }

  trackOffset(): string {
    return `translateX(calc(-${this.activeIndex()} * (var(--card-width) + var(--card-gap))))`;
  }

  onDragStart(event: MouseEvent | TouchEvent): void {
    this.dragging = true;
    this.dragStartX = this.getX(event);
  }

  onDragEnd(event: MouseEvent | TouchEvent): void {
    if (!this.dragging) {
      return;
    }
    this.dragging = false;
    const deltaX = this.getX(event) - this.dragStartX;
    const threshold = 40;
    if (deltaX > threshold) {
      this.prev();
    } else if (deltaX < -threshold) {
      this.next();
    }
  }

  private getX(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent ? event.clientX : event.changedTouches[0].clientX;
  }
}

