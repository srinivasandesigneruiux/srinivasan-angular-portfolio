import { Component, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
type SendState = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css',
})
export class ContactSectionComponent {
  private readonly fb = new FormBuilder();
  private readonly http = inject(HttpClient);

  readonly sendState = signal<SendState>('idle');

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  private readonly accessKey = '986fc6a2-13ee-4941-9120-30516e275b90';
  private autoHideTimer?: ReturnType<typeof setTimeout>;

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sendState.set('sending');

    const payload = {
      access_key: this.accessKey,
      ...this.form.getRawValue(),
    };

    try {
      const response: any = await firstValueFrom(
        this.http.post('https://api.web3forms.com/submit', payload)
      );

      if (response.success) {
        this.sendState.set('success');
        this.form.reset();
      } else {
        console.error('Web3Forms error:', response.message);
        this.sendState.set('error');
      }
    } catch (error: any) {
      console.error('Web3Forms send failed:', error);
      this.sendState.set('error');
    }

    this.autoHideToast();
  }

  dismissToast(): void {
    this.sendState.set('idle');
    if (this.autoHideTimer) {
      clearTimeout(this.autoHideTimer);
    }
  }

  private autoHideToast(): void {
    if (this.autoHideTimer) {
      clearTimeout(this.autoHideTimer);
    }
    this.autoHideTimer = setTimeout(() => {
      this.sendState.set('idle');
    }, 5000);
  }
}