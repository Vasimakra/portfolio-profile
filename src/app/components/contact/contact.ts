import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  public showToast = false;
  public toastMessage = '';
  public toastType: 'success' | 'error' = 'success';

  public sendEmail(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fields = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[name], textarea[name]'),
    );
    const emptyField = fields.find((field) => !field.value.trim());

    fields.forEach((field) => field.classList.toggle('invalid', !field.value.trim()));

    if (emptyField) {
      this.toastType = 'error';
      this.toastMessage = 'Please fill in all fields before submitting.';
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
      return;
    }

    emailjs
      .sendForm('service_uudwrjg', 'template_q7zziun', form, {
        publicKey: 'P1vf_qn7UkPKxSZ_g',
      })
      .then(
        () => {
          form.reset();
          fields.forEach((field) => field.classList.remove('invalid'));
          this.toastType = 'success';
          this.toastMessage = 'Message sent successfully!';
          this.showToast = true;
          setTimeout(() => {
            this.showToast = false;
          }, 3000);
          console.log('SUCCESS!');
        },
        (error) => {
          this.toastType = 'error';
          this.toastMessage = 'Unable to send message. Please try again later.';
          this.showToast = true;
          setTimeout(() => {
            this.showToast = false;
          }, 3000);
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
