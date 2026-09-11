import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  @Input() appScrollReveal: string = 'fade-up';
  @Input() revealDelay: number = 0;

  ngOnInit(): void {
    const el = this.el.nativeElement as HTMLElement;

    this.renderer.addClass(el, 'reveal');
    this.renderer.addClass(el, `reveal-${this.appScrollReveal}`);
    this.renderer.setStyle(el, 'transition-delay', `${this.revealDelay}ms`);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(el, 'reveal-active');
            this.observer?.unobserve(el);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}