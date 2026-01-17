import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    public contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    const formData = this.contentService.getContactFormData();
    const formControls: { [key: string]: any } = {};

    formData.fields.forEach((field) => {
      if (field.type === 'radio') {
        formControls[field.name] = ['', field.required ? Validators.required : null];
      } else {
        formControls[field.name] = [
          '',
          field.required ? Validators.required : null,
        ];
      }
    });

    this.contactForm = this.fb.group(formControls);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.formSubmitted = true;
      console.log('Form submitted:', this.contactForm.value);
      // TODO: Implement form submission logic (API call, etc.)
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.hasError('required') && field?.touched) {
      return 'This field is required';
    }
    return '';
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
}
