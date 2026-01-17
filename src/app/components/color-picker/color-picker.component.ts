import { Component, Input, Output, EventEmitter, signal, effect, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorOption } from '../../pages/court-designer/court-designer.types';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss',
})
export class ColorPickerComponent implements OnInit, OnDestroy {
  @Input() options: ColorOption[] = [];
  @Input() selectedValue: string = '';
  @Input() label: string = '';
  @Input() zone: string = '';
  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('selectElement') selectElement?: ElementRef<HTMLDivElement>;

  isOpen = signal(false);
  selectedOption = signal<ColorOption | null>(null);
  private clickOutsideListener?: () => void;

  constructor() {
    effect(() => {
      if (this.selectedValue && this.options.length > 0) {
        const option = this.options.find(opt => opt.value === this.selectedValue);
        if (option) {
          this.selectedOption.set(option);
        }
      }
    });
  }

  ngOnInit(): void {
    if (this.selectedValue && this.options.length > 0) {
      const option = this.options.find(opt => opt.value === this.selectedValue);
      if (option) {
        this.selectedOption.set(option);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.clickOutsideListener) {
      document.removeEventListener('click', this.clickOutsideListener);
    }
  }

  toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.isOpen.update(value => !value);
    
    if (this.isOpen()) {
      // Close other dropdowns and set up click outside listener
      setTimeout(() => {
        this.clickOutsideListener = () => {
          this.isOpen.set(false);
          if (this.clickOutsideListener) {
            document.removeEventListener('click', this.clickOutsideListener);
            this.clickOutsideListener = undefined;
          }
        };
        document.addEventListener('click', this.clickOutsideListener);
      }, 0);
    } else {
      if (this.clickOutsideListener) {
        document.removeEventListener('click', this.clickOutsideListener);
        this.clickOutsideListener = undefined;
      }
    }
  }

  selectOption(option: ColorOption, event: Event): void {
    event.stopPropagation();
    this.selectedOption.set(option);
    this.valueChange.emit(option.value);
    this.isOpen.set(false);
    
    if (this.clickOutsideListener) {
      document.removeEventListener('click', this.clickOutsideListener);
      this.clickOutsideListener = undefined;
    }
  }

  getTextColor(backgroundColor: string): string {
    // Light colors that need dark text
    const lightColors = ['#ffffff', '#d2b48c', '#74767a', '#92928b'];
    return lightColors.includes(backgroundColor.toLowerCase()) ? '#000' : '#fff';
  }
}

