import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import {
  DESIGN_SKILLS,
  IMPLEMENTATION_SKILLS,
  SkillItem
} from '../../data/portfolio-data';

import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
interface ContactFact {
  icon: string;
  label: string;
  value: string;
}


interface SkillIcon {
  name: string;
  src: string;
}


@Component({
  selector: 'app-resume-section',
  standalone: true,

  imports: [
    CommonModule, 
     ScrollRevealDirective,
  ],

  templateUrl: './resume-section.component.html',
  styleUrl: './resume-section.component.css',
})
export class ResumeSectionComponent
  implements AfterViewInit, OnDestroy {


  // =========================================================
  // EXISTING TIMELINE REFERENCES
  // =========================================================

  @ViewChild('timelineContainer')
  containerRef!: ElementRef<HTMLElement>;


  @ViewChild('timelineProgress')
  progressRef!: ElementRef<HTMLElement>;


  @ViewChildren('tlIcon')
  iconRefs!: QueryList<ElementRef<HTMLElement>>;


  // =========================================================
  // SKILLS SECTION
  // =========================================================

  @ViewChild('skillsSection')
  skillsSectionRef!: ElementRef<HTMLElement>;


  // =========================================================
  // SKILLS DATA
  // =========================================================

  readonly designSkills: SkillItem[] =
    DESIGN_SKILLS;


  readonly implementationSkills: SkillItem[] =
    IMPLEMENTATION_SKILLS;


  // =========================================================
  // CONTACT FACTS
  // =========================================================

  readonly leftFacts: ContactFact[] = [

    {
      icon: 'fa-solid fa-user',
      label: 'Name',
      value: 'Srinivasan G'
    },

    {
      icon: 'fa-solid fa-cake-candles',
      label: 'Birthday',
      value: 'April 28, 2000'
    },

    {
      icon: 'fa-solid fa-location-crosshairs',
      label: 'Address',
      value:
        'No 4/676, Neelore Pavalamalar Street, Thiruvallur–602001'
    }

  ];


  readonly rightFacts: ContactFact[] = [

    {
      icon: 'fa-solid fa-phone',
      label: 'Phone',
      value: '+91 6374857112'
    },

    {
      icon: 'fa-solid fa-envelope',
      label: 'Email',
      value:
        'srinivasan.designerrulx@gmail.com'
    },

    {
      icon: 'fa-brands fa-square-github',
      label: 'Website',
      value:
        'www.srinivasandesigner.com'
    }

  ];


  // =========================================================
  // TIMELINE ICONS
  // =========================================================

  readonly timelineIcons: SkillIcon[] = [

    {
      name: 'Figma',
      src: 'assets/images/logo/figma.png'
    },

    {
      name: 'Adobe XD',
      src: 'assets/images/logo/xd.png'
    },

    {
      name: 'Photoshop',
      src: 'assets/images/logo/photoshop.png'
    },

    {
      name: 'Lightroom',
      src: 'assets/images/logo/lr.png'
    },

    {
      name: 'Illustrator',
      src: 'assets/images/logo/ai.png'
    },

    {
      name: 'Angular',
      src: 'assets/images/logo/angular.png'
    },

    {
      name: 'HTML5',
      src: 'assets/images/logo/html.png'
    },

    {
      name: 'CSS3',
      src: 'assets/images/logo/css.png'
    },

    {
      name: 'React',
      src: 'assets/images/logo/react.png'
    },

    {
      name: 'Bootstrap',
      src: 'assets/images/logo/bootstrap.png'
    },

    {
      name: 'VS Code',
      src: 'assets/images/logo/vs code.png'
    },

    {
      name: 'GitLab',
      src: 'assets/images/logo/git lab.png'
    },

    {
      name: 'PowerPoint',
      src: 'assets/images/logo/powerpoint.png'
    },

    {
      name: 'ChatGPT',
      src: 'assets/images/logo/chat gpt.png'
    },

    {
      name: 'Claude',
      src: 'assets/images/logo/claude.png'
    }

  ];


  // =========================================================
  // TIMELINE SETTINGS
  // =========================================================

  private readonly durationMs = 20000;

  private readonly pauseAtEndMs = 20000;

  private readonly pauseAtResetMs = 800;


  // =========================================================
  // TIMELINE VARIABLES
  // =========================================================

  private animationFrameId:
    number | null = null;


  private timeoutId:
    ReturnType<typeof setTimeout> | null = null;


  private observer:
    IntersectionObserver | null = null;


  private hasPlayed = false;


  // =========================================================
  // SKILL ANIMATION VARIABLES
  // =========================================================

  private skillsObserver:
    IntersectionObserver | null = null;


  private skillsHasPlayed = false;


  // =========================================================
  // EASING FUNCTION
  // =========================================================

  private easeInOutCubic(
    t: number
  ): number {

    return t < 0.5
      ? 4 * t * t * t
      : 1 -
        Math.pow(
          -2 * t + 2,
          3
        ) / 2;

  }


  // =========================================================
  // CIRCLE OFFSET
  // =========================================================

  getCircleOffset(
    percent: number
  ): number {

    const radius = 50;

    const circumference =
      2 *
      Math.PI *
      radius;


    return circumference -
      (
        percent / 100
      ) *
      circumference;

  }


  // =========================================================
  // AFTER VIEW INIT
  // =========================================================

  ngAfterViewInit(): void {


    // =======================================================
    // EXISTING TIMELINE OBSERVER
    // =======================================================

    if (
      this.containerRef &&
      this.progressRef
    ) {

      this.observer =
        new IntersectionObserver(

          (entries) => {

            for (
              const entry
              of entries
            ) {

              if (
                entry.isIntersecting &&
                !this.hasPlayed
              ) {

                this.hasPlayed = true;

                this.runTimelineAnimation();

                this.observer?.disconnect();

              }

            }

          },

          {
            threshold: 0.4
          }

        );


      this.observer.observe(
        this.containerRef.nativeElement
      );

    }


    // =======================================================
    // CIRCLE SKILL ANIMATION
    // =======================================================

    this.setupSkillsAnimation();

  }


  // =========================================================
  // SETUP SKILLS ANIMATION
  // =========================================================

  // private setupSkillsAnimation(): void {

  //   if (!this.skillsSectionRef) {
  //     return;
  //   }


  //   const skillsSection =
  //     this.skillsSectionRef.nativeElement;


  //   // =======================================================
  //   // FIND ALL CIRCLES
  //   // =======================================================

  //   const circles =
  //     skillsSection.querySelectorAll(
  //       '.circle-progress'
  //     );


  //   if (!circles.length) {
  //     return;
  //   }


  //   // =======================================================
  //   // CIRCLE CIRCUMFERENCE
  //   // =======================================================

  //   const circumference =
  //     2 *
  //     Math.PI *
  //     50;


  //   // =======================================================
  //   // INITIAL STATE
  //   // =======================================================

  //   circles.forEach(
  //     (circle: Element) => {

  //       const circleElement =
  //         circle as SVGCircleElement;


  //       /*
  //        * Make the circle start empty.
  //        */

  //       circleElement.style.strokeDasharray =
  //         `${circumference}`;


  //       circleElement.style.strokeDashoffset =
  //         `${circumference}`;


  //       /*
  //        * Make sure SVG circle starts
  //        * from the top.
  //        */

  //       circleElement.style.transformOrigin =
  //         '60px 60px';


  //       circleElement.style.transform =
  //         'rotate(-90deg)';

  //     }
  //   );


  //   // =======================================================
  //   // INTERSECTION OBSERVER
  //   // =======================================================

  //   this.skillsObserver =
  //     new IntersectionObserver(

  //       (entries) => {

  //         for (
  //           const entry
  //           of entries
  //         ) {

  //           if (
  //             entry.isIntersecting &&
  //             !this.skillsHasPlayed
  //           ) {

  //             this.skillsHasPlayed = true;


  //             // =============================================
  //             // SECTION VISIBLE
  //             // =============================================

  //             skillsSection.classList.add(
  //               'skills-visible'
  //             );


  //             // =============================================
  //             // ANIMATE ALL CIRCLES
  //             // =============================================

  //             circles.forEach(
  //               (
  //                 circle: Element,
  //                 index: number
  //               ) => {

  //                 const circleElement =
  //                   circle as SVGCircleElement;


  //                 const parent =
  //                   circleElement.closest(
  //                     '.progress-circle'
  //                   ) as HTMLElement | null;


  //                 if (!parent) {
  //                   return;
  //                 }


  //                 const percent =
  //                   Number(
  //                     parent.getAttribute(
  //                       'data-percent'
  //                     )
  //                   );


  //                 if (
  //                   Number.isNaN(percent)
  //                 ) {

  //                   return;

  //                 }


  //                 const finalOffset =
  //                   circumference -
  //                   (
  //                     percent / 100
  //                   ) *
  //                   circumference;


  //                 // =========================================
  //                 // STAGGER ANIMATION
  //                 // =========================================

  //                 setTimeout(
  //                   () => {

  //                     circleElement.style.transition =
  //                       'stroke-dashoffset 1.8s cubic-bezier(0.22, 1, 0.36, 1)';


  //                     circleElement.style.strokeDashoffset =
  //                       `${finalOffset}`;

  //                   },
  //                   index * 100
  //                 );

  //               }
  //             );


  //             // =============================================
  //             // OBSERVE ONLY ONCE
  //             // =============================================

  //             this.skillsObserver?.unobserve(
  //               skillsSection
  //             );

  //           }

  //         }

  //       },

  //       {
  //         threshold: 0.25
  //       }

  //     );


  //   // =======================================================
  //   // START OBSERVING
  //   // =======================================================

  //   this.skillsObserver.observe(
  //     skillsSection
  //   );

  // }

private setupSkillsAnimation(): void {
  const skillsSection = this.skillsSectionRef?.nativeElement;

  if (!skillsSection) {
    return;
  }

  const circles = skillsSection.querySelectorAll(
    '.circle-progress'
  ) as NodeListOf<SVGCircleElement>;

  const circumference = 2 * Math.PI * 50;

  // Start all circles empty
  circles.forEach((circle) => {
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
  });

  // Trigger when section enters viewport
  this.skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          circles.forEach((circle, index) => {

            const parent = circle.closest(
              '.progress-circle'
            ) as HTMLElement | null;

            if (!parent) {
              return;
            }

            const percent = Number(
              parent.getAttribute('data-percent')
            );

            const offset =
              circumference -
              (percent / 100) * circumference;

            // Small delay between each circle
            setTimeout(() => {
              circle.style.strokeDashoffset =
                `${offset}`;
            }, index * 100);
          });

          // Run only once
          this.skillsObserver?.unobserve(skillsSection);
        }
      });
    },
    {
      threshold: 0.25
    }
  );

  this.skillsObserver.observe(skillsSection);
}
  // =========================================================
  // EXISTING TIMELINE ANIMATION
  // =========================================================

  private runTimelineAnimation(): void {

    const containerWidth =
      this.containerRef
        .nativeElement
        .offsetWidth;


    const iconEls =
      this.iconRefs.map(
        (ref) =>
          ref.nativeElement
      );


    const progressEl =
      this.progressRef
        .nativeElement;


    const startTime =
      performance.now();


    const step =
      (now: number) => {

        const elapsed =
          now -
          startTime;


        const rawPercent =
          Math.min(
            elapsed /
              this.durationMs,
            1
          );


        const percent =
          this.easeInOutCubic(
            rawPercent
          );


        // ===================================================
        // TIMELINE PROGRESS
        // ===================================================

        progressEl.style.width =
          `${percent * 100}%`;


        // ===================================================
        // ICON POSITION
        // ===================================================

        const lineEdgePx =
          percent *
          containerWidth;


        for (
          const iconEl
          of iconEls
        ) {

          const iconCenter =
            iconEl.offsetLeft +
            iconEl.offsetWidth / 2;


          if (
            lineEdgePx >=
            iconCenter
          ) {

            iconEl.classList.add(
              'revealed'
            );

          }

        }


        // ===================================================
        // CONTINUE
        // ===================================================

        if (
          rawPercent < 1
        ) {

          this.animationFrameId =
            requestAnimationFrame(
              step
            );

        }

        else {

          // ===============================================
          // PAUSE AT END
          // ===============================================

          this.timeoutId =
            setTimeout(
              () => {

                progressEl.style.width =
                  '0%';


                for (
                  const iconEl
                  of iconEls
                ) {

                  iconEl.classList.remove(
                    'revealed'
                  );

                }


                // =========================================
                // RESET PAUSE
                // =========================================

                this.timeoutId =
                  setTimeout(
                    () =>
                      this.runTimelineAnimation(),
                    this.pauseAtResetMs
                  );

              },
              this.pauseAtEndMs
            );

        }

      };


    this.animationFrameId =
      requestAnimationFrame(
        step
      );

  }


  // =========================================================
  // DESTROY
  // =========================================================

  ngOnDestroy(): void {


    // =======================================================
    // TIMELINE OBSERVER
    // =======================================================

    this.observer?.disconnect();


    // =======================================================
    // SKILLS OBSERVER
    // =======================================================

    this.skillsObserver?.disconnect();


    // =======================================================
    // CANCEL ANIMATION
    // =======================================================

    if (
      this.animationFrameId !== null
    ) {

      cancelAnimationFrame(
        this.animationFrameId
      );

    }


    // =======================================================
    // CLEAR TIMEOUT
    // =======================================================

    if (
      this.timeoutId !== null
    ) {

      clearTimeout(
        this.timeoutId
      );

    }

  }

}

