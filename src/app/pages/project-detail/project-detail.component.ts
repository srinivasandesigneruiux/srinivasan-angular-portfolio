import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import {
  MODAL_GALLERIES,
  PORTFOLIO_ITEMS,
  PortfolioItem,
  ModalGallery,
  CASE_STUDIES,
  CaseStudy,
} from '../../data/portfolio-data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('id') ?? '')), {
    initialValue: '',
  });

  readonly activeTabIndex = signal(0);

  readonly project = computed<PortfolioItem | undefined>(() =>
    PORTFOLIO_ITEMS.find((item) => item.id === this.slug())
  );

  readonly gallery = computed<ModalGallery | undefined>(() => {
    const project = this.project();
    return project ? MODAL_GALLERIES[project.modalId] : undefined;
  });

  readonly caseStudy = computed<CaseStudy | undefined>(() => CASE_STUDIES[this.slug()]);

  readonly currentIndex = computed(() => PORTFOLIO_ITEMS.findIndex((item) => item.id === this.slug()));

  readonly previousProject = computed<PortfolioItem | undefined>(() => {
    const i = this.currentIndex();
    if (i <= 0) {
      return undefined;
    }
    return PORTFOLIO_ITEMS[i - 1];
  });

  readonly nextProject = computed<PortfolioItem | undefined>(() => {
    const i = this.currentIndex();
    if (i === -1 || i >= PORTFOLIO_ITEMS.length - 1) {
      return undefined;
    }
    return PORTFOLIO_ITEMS[i + 1];
  });

  setTab(index: number): void {
    this.activeTabIndex.set(index);
  }

  goToProject(id: string): void {
    this.activeTabIndex.set(0);
    this.router.navigateByUrl(`/portfolio/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

