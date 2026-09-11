import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

type SendState = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css',
})
export class ContactSectionComponent {
  private readonly fb = new FormBuilder();

  readonly sendState = signal<SendState>('idle');

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  /**
   * Fill in your own EmailJS service/template/public keys here.
   * Sign up at https://www.emailjs.com to get these values.
   */
  private readonly serviceId = 'YOUR_EMAILJS_SERVICE_ID';
  private readonly templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
  private readonly publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sendState.set('sending');
    try {
      await emailjs.send(this.serviceId, this.templateId, this.form.getRawValue(), {
        publicKey: this.publicKey,
      });
      this.sendState.set('success');
      this.form.reset();
    } catch (error) {
      console.error('EmailJS send failed', error);
      this.sendState.set('error');
    }
  }
}
