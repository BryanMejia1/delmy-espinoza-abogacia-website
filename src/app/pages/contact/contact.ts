import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})

export class Contact {

  // 👇 Los dos números (sin + ni guiones)
  private readonly whatsappNumbers = [
    '50488149061',
    '50433597818'
  ];

  form: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() { return this.form.controls; }

  submitToWhatsApp(index: number): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, subject, message } = this.form.getRawValue();

    const text =
      `Hola, soy ${name}.\n` +
      `Correo: ${email}\n` +
      `Asunto: ${subject}\n\n` +
      `${message}`;

    const number = this.whatsappNumbers[index];
    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank', 'noopener');
  }
}

